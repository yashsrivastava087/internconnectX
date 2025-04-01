import { application } from "express";
import mongoose, { model } from "mongoose";

const Jobmodel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String
    }],
    salary:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required: true
    },
    Jobtype:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    Created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
        required:true
    }

},{timestamps:true})

export default job = mongoose.model('job', Jobmodel);