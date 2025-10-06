
 import { Router } from "express";


import {
  login,
  register,
  medicine,
  getUserHistory,
  updateMedicineById,
  deleteMedicineById,
  trackMedicineIntake,
  getTodayDoses,
  getNotifications,
  deleteNotification,
  getUpcomingMedicines,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/medicine", medicine);
router.get("/getUserHistory", getUserHistory);
router.put("/medicine/:id", updateMedicineById);
router.delete("/medicine/:id", deleteMedicineById);
router.post("/medicine/track", trackMedicineIntake);
router.get("/medicine/today", getTodayDoses);
router.get("/notifications", getNotifications);
router.delete("/notifications/:id", deleteNotification);
router.get("/medicine/upcoming", getUpcomingMedicines);  

export default router;
