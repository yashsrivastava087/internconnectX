import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, phonenumber, pw, role } = req.body;
        if (!fullname || !email || !phonenumber || !pw || !role) {
            return res.status(400).json({
                message: "something's wrong",
                success: false
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User with this email already exists",
                success: false
            })
        }

        const hashedpw = await bcrypt.hash(pw, 10);

        await User.create({
            fullname,
            email,
            phonenumber,
            pw: hashedpw,
            role,
        })

    } catch (error) {

    }
}

export const login = async (req, res) => {
    try {
        const { email, pw, role } = req.body;
        if (!email || !pw || !role) {
            return res.status(400).json({
                message: "something's missing",
                success: false
            })
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "incorrect email_id or password",
                success: false
            })
        }

        const pwmatch = await bcrypt.compare(pw, user.pw);
        if (!pwmatch) {
            return res.status(400).json({
                message: "incorrect email_id or password",
                success: false
            })
        }

        if (role != user.role) {
            return res.status(400).json({
                message: "email with this role doesnt exists",
                success: false
            })
        }

        const tokendata = {
            userId: user._id,
        }
        const token = await jwt.sign(tokendata, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome Back ${user.fullname}`,
            success: true
        })
    } catch (error) {

    }
}