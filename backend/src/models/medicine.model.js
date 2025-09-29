import mongoose, { Schema } from "mongoose";


const medicineSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true }, 
  time: { type: String, required: true }, 
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  takenLogs: [
    {
      scheduledTime: Date,
      actualTime: Date,
      status: { type: String, enum: ["taken", "late", "missed"] }
    }
  ],
  deleted: {
    isDeleted: { type: Boolean, default: false },
    reason: { type: String }
  }
});

const Medicine = mongoose.model("Medicine", medicineSchema);

export { Medicine };