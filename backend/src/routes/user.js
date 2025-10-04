import { Router } from "express";
import { login, register,medicine, getUserHistory} from "../controllers/user.controller.js";



const router = Router();

router.route("/login").post(login)
router.route("/register").post(register)

router.route("/medicine").post(medicine);
router.route("/getUserHistory").get(getUserHistory);

export default router;