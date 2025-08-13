import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const Signup = () => {

    const [input,setinput] = useState({
      fullname:"",
      email:"",
      pw:"",
      phn:"",
      role:"",
      file:""
      
    });

    const inputhandler = (e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    const filehandler = (e)=>{
        setinput({...input,file:e.target.files?.[0]});
    }

    const submithandle = (e) =>{
      e.preventDefault();
      console.log(input);
      
    }
  return (
    
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submithandle} className='w-1/2 border border-gray-150 rounded-md p-4 my-12'>
          <h1 className='font-bold text-center mb-5 text-2xl'>Signup</h1>
          <div className='my-3'>
            <Label>Full Name</Label>
            <Input
              value={input.fullname}
              name = "fullname"
              onChange= {inputhandler}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className='my-3'>
            <Label>Email</Label>
            <Input
              value={input.email}
              name = "email"
              onChange= {inputhandler}
              type="email"
              placeholder="email@gmail.com"
            />
          </div>
          <div className='my-3'>
            <Label>Password</Label>
            <Input
              value={input.pw}
              name = "pw"
              onChange= {inputhandler}
              type="password"
              placeholder="Create your password"
            />
          </div>

          <div className='my-3'>
            <Label>Phone Number</Label>
            <Input
              value={input.phn}
              name = "phn"
              onChange= {inputhandler}
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className='flex items-center justify-between'>
            
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role==='recruiter'}
                  onChange = {inputhandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Recruiter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role==='student'}
                  onChange = {inputhandler}
                  className="cursor-pointer"
                  
                />
                <Label htmlFor="r2">Student</Label>
              </div>
            </RadioGroup>

            <div className='flex items-center gap-2'>

              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange = {filehandler}
                className="cursor-pointer bg-gray-100"
              />
            </div>

          </div>
          <Button type="submit" className="w-full my-4 cursor-pointer">SignUp</Button>
          <span className='text-sm'>Already have an account?<Link to="/Login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup
