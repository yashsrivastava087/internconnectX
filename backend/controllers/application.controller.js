import { application } from "express";
import { Application } from "../models/application.js";
import job, {Job} from "../models/job.js"

export const applyjob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required",
                success: false
            })
        }
        const existingapplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingapplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            })
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(400).json({
                message: "Job not found",
                success: false
            })
        }
        job.application.push(newApplication._id,);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

export const getAppliedjob = async (req,res) =>{
    try {
        const userId = req.id;
        const applications = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{
                    createdAt:-1
                }}
            }
        })
        if(!application){
            return res.status(400).json({
                message:'applications not found',
                success:false
            })
        }
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getapplicants = async (req,res) =>{
    try {
        const jobid = req.params.id;
        const job = await Job.findById(jobid).populate({
            path:'application',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant',
                options:{sort:{createdAt:-1}}
            }
        })
        if(!job){
            return res.status(400).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            job,
            success:true
        })

    } catch (error) {
        console.log(error);
        }
}

export const updatestatus = async (res,req) => {
    try {
        const {status} = req.body;
        const applicantionId = req.params.id;
    } catch (error) {
        console.log(error);
    }
}