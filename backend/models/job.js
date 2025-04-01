import mongoose from "mongoose";

const Jobmodel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [{
    type: String
  }],
  salary: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  Jobtype: {
    type: String,
    required: true
  },
  position: {
    type: String, // Changed from Number to String (assuming it's a job title)
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }]
}, { timestamps: true });

export default mongoose.model('Job', Jobmodel);