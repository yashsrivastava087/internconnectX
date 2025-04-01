import job from "../models/job";
import job from "../models/job";
import job from "../models/job";

export const postjob = async (req, res) => {
    try {
        const { title, description, requirements, salary, Jobtype, position, companyId,experience } = req.body;
        const userId = req.id;

        const requiredFields = [
            'title', 
            'description', 
            'requirements', 
            'salary', 
            'Jobtype', 
            'position', 
            'companyId',
            'experience'
        ];

        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                message: `Missing required fields: ${missingFields.join(', ')}`,
                success: false,
                missingFields
            });
        };

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary:Number(salary),
            location,
            Jobtype,
            experiencelevel:experience,
            position,
            company:companyId,
            created_by:userId
        });

        return res.status(201).json({
            message:"New Job created successfully",
            success: true
        })

    } catch (error) {
        console.error(error);
    }
};

export const getAlljobs = async (req,res)=>{
    try {
        const keyword = req.query.keyword || "";
        const query ={
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}}
            ]
        }
        const jobs = await Job.find(query);
        if(!jobs){
            return res.status(400).json({
                message:"jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

export const getJobById = async (req,res) =>{
    try {
        const jobId = req.params.id;
        const job = await Job.findByid(jobId);
        if(!job){
            return res.status(400).json({
                message:"jobs not found",
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

export const getadminjobs = async (req,res) =>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({create})
    } catch (error) {
        console.log(error);
        
    }
}