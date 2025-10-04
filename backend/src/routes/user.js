import { Router } from "express";
import { login, register, medicine, getUserHistory, updateMedicineById, deleteMedicineById } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/medicine", medicine);
router.get("/getUserHistory", getUserHistory);
router.put("/medicine/:id", updateMedicineById);
router.delete("/medicine/:id", deleteMedicineById);

export default router;
