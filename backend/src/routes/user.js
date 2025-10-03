import { Router } from "express";
import { login, register} from "../controllers/user.controller.js";



const router = Router();

router.route("/login").post(login)
router.route("/register").post(register)

//router.route("/google-login").post(googleLogin);
//router.route("/add_to_activity").post(addToHistory)

export default router;