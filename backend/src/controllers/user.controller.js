import httpStatus from "http-status";
import { User } from "../models/user.model.js";


import { Medicine } from "../models/medicine.model.js";


import bcrypt from "bcrypt";
import crypto from "crypto";
// import { OAuth2Client } from "google-auth-library";

// const client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET
// );



// -- LOGIN --




const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid email or password" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.token = token;
    await user.save();

    return res.status(httpStatus.OK).json({
      message: "Login successful",
      token,
      user: { id: user._id, username: user.username, name: user.name },
    });
  } catch (e) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong: ${e.message}` });
  }
};





// -- REGISTER --





const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide all fields" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(httpStatus.CREATED)
      .json({ message: "User registered successfully" });
  } catch (e) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong: ${e.message}` });
  }
};


const medicine = async (req, res) => {
  try {
    const { userId, name, dosage, frequency, time, startDate, endDate } = req.body;

    // Basic validation (expand as needed)
    if (!userId || !name || !dosage || !frequency || !time || !startDate || !endDate) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: 'All fields are required' });
    }

    const newMedicine = new Medicine({
      userId,
      name,
      dosage,
      frequency,
      time,
      startDate,
      endDate,
    });
     await newMedicine.save();

    return res.status(httpStatus.CREATED).json({ message: 'Medicine record created successfully', medicine: newMedicine });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Failed to create medicine: ${e.message}` });
  }
};


const getUserHistory = async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: 'Token is required' });
  }

  try {
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'User not found' });
    }
    
    const medicines = await Medicine.find({ userId: user._id });
    return res.status(httpStatus.OK).json(medicines);

  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Something went wrong: ${e.message}` });
  }
};



export { login, register,medicine, getUserHistory};
