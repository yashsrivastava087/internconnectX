import express from "express"
import { login, register, updateprofile } from "../controllers/user.controller";
import isauthenticated from "../middlewares/isauthenticated";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateprofile").post(isauthenticated,updateprofile);

export default router;
