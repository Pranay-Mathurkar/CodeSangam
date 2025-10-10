
<<<<<<< HEAD
import { Router } from "express";
// import {chatbotHandler} from "../controllers/chatbot.controller.js";
=======
 import { Router } from "express";
 import {chatbotHandler} from "../controllers/chatbot.controller.js";

>>>>>>> 281e39380064e4c641f47f66f4e6d0dc36c0a0f4

import {
  googleLogin,
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
router.post("/auth/google", googleLogin);

router.post("/medicine", medicine);
// router.post("/chatbot",chatbotHandler);
router.get("/getUserHistory", getUserHistory);
router.put("/medicine/:id", updateMedicineById);
router.delete("/medicine/:id", deleteMedicineById);
router.post("/medicine/track", trackMedicineIntake);
router.get("/medicine/today", getTodayDoses);
router.get("/notifications", getNotifications);
router.delete("/notifications/:id", deleteNotification);
router.get("/medicine/upcoming", getUpcomingMedicines);  

export default router;


