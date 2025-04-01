import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, phonenumber, pw, role } = req.body;

        if (!fullname || !email || !phonenumber || !pw || !role) {
            return res.status(400).json({
                message: "Something's missing",
                success: false
            });
        }
        

        const existingUser = await User.findOne({ email });

        if (existingUser) { 
            return res.status(400).json({
                message: "User with this email already exists",
                success: false
            });
        }

        const hashedpw = await bcrypt.hash(pw, 10);

        const newUser = await User.create({
            fullname,
            email,
            phonenumber,
            pw: hashedpw,
            role,
            ...(role === "Student" && { collegeemail }),
            profile: { bio: "", skills: [] }
        });

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: newUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, pw, role } = req.body;

        if (!email || !pw || !role) {
            return res.status(400).json({
                message: "Something's missing",
                success: false
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const pwMatch = await bcrypt.compare(pw, user.pw);
        if (!pwMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Email with this role doesn't exist",
                success: false
            });
        }

        const tokendata = { userId: user._id };
        const token = jwt.sign(tokendata, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200)
            .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
            .json({
                message: `Welcome back, ${user.fullname}`,
                success: true,
            });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const updateprofile = async (req, res) => {
    try {
        const { fullname, email, phonenumber, bio, skills } = req.body;

        const skillsArray = Array.isArray(skills) ? skills : (typeof skills === "string" ? skills.split(",") : []);
        const userId = req.id;
        let user = await User.findById(userId); 

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                user,
                success: false
            });
        }

        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phonenumber) user.phonenumber = phonenumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray;

        await user.save();

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
