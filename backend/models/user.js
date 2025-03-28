import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Student', 'Recruiter']
    },
    collegename: {
        type: String,
    },
    profile: {
        bio: { type: String },
        skills: { type: [String] },  
        resume: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilepic: { type: String, default: "" }
    }
}, { timestamps: true });

const User = mongoose.model("User", usermodel);
export default User;
