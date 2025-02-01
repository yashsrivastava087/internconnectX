import mongoose, { model } from "mongoose";

const usermodel = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    
    collegeemail:{
        type:String,
        required: true,
        unique: true
    },
    ContactNumber:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required: true,
        enum:['Student','Recruiter']
    },
    collegename:{
        type:String,
        required:true
    },
    profile:{
        bio:{type:String},
        skills:{type:String},
        resume:{
            type:String
        },
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
        profilepic:{type:String,
            default:""
        }
    }

}, {timestamps:true})
export default User = mongoose.model('User', usermodel);