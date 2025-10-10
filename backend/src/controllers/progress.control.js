// import { User } from "../models/user.model.js";
// import { Medicine } from "../models/medicine.model.js";
// import httpStatus from "http-status";

// import { MedicineProgress } from "../models/progress.model.js";


// const getWeeklyProgress = async (req, res) => {
//   const { token } = req.query;

//   if (!token) {
//     return res.status(httpStatus.BAD_REQUEST).json({ message: "Token required" });
//   }

//   try {
//     const user = await User.findOne({ token });
//     if (!user) {
//       return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
//     }

//     const today = new Date();
//     const startOfWeek = new Date(today);
//     startOfWeek.setDate(today.getDate() - 6);

//     const progress = await MedicineProgress.aggregate([
//       { $match: { userId: user._id, date: { $gte: startOfWeek } } },
//       {
//         $group: {
//           _id: "$date",
//           dosesTaken: { $sum: "$dosesTaken" },
//           dosesScheduled: { $sum: "$dosesScheduled" },
//         },
//       },
//       { $sort: { _id: 1 } },
//     ]);

//     res.status(httpStatus.OK).json(progress);
//   } catch (err) {
//     console.error("Failed to get weekly progress:", err);
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Failed to get weekly progress" });
//   }
// };

// export { getWeeklyProgress };


import { User } from "../models/user.model.js";
import httpStatus from "http-status";
import { MedicineProgress } from "../models/progress.model.js";

/**
 * Controller to get user's weekly progress for chart rendering.
 * Always returns one entry per day (last 7 days), filling zeros as needed.
 */
const getWeeklyProgress = async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: "Token required" });
  }

  try {
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
    }

    // Prepare 7-day window, dates at midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      days.push({
        key: d.toISOString().slice(0, 10), // "YYYY-MM-DD"
        date: new Date(d), // original Date object for frontend
      });
    }

    // Aggregate by matching user + date >= earliestDay
    const progress = await MedicineProgress.aggregate([
      {
        $match: {
          userId: user._id,
          date: { $gte: days[0].date },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }, // "YYYY-MM-DD"
          dosesTaken: { $sum: "$dosesTaken" },
          dosesScheduled: { $sum: "$dosesScheduled" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Convert to map for O(1) lookup
    const progressMap = {};
    progress.forEach(item => {
      progressMap[item._id] = {
        dosesTaken: item.dosesTaken,
        dosesScheduled: item.dosesScheduled,
      };
    });

    // Build final array, filling zeroes for missing days
    const result = days.map(({ key, date }) => ({
      _id: key,
      date,
      dosesTaken: progressMap[key]?.dosesTaken || 0,
      dosesScheduled: progressMap[key]?.dosesScheduled || 0,
    }));

    res.status(httpStatus.OK).json(result);
  } catch (err) {
    console.error("Failed to get weekly progress:", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Failed to get weekly progress" });
  }
};

export { getWeeklyProgress };
