import mongoose from "mongoose";

const medicineProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  medicineId: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine", required: true },
  date: { type: Date, required: true },
  dosesTaken: { type: Number, default: 0 },
  dosesScheduled: { type: Number, required: true }, // Number of doses user should take on this date
});

const MedicineProgress = mongoose.model("MedicineProgress", medicineProgressSchema);

export { MedicineProgress };
