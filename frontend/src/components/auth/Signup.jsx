import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
const Signup = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-150 rounded-md p-4 my-12'>
          <h1 className='font-bold text-center mb-5 text-2xl'>Signup</h1>
          <div className='my-3'>
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className='my-3'>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="email@gmail.com"
            />
          </div>
          <div className='my-3'>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Create your password"
            />
          </div>

          <div className='flex items-center justify-between'>
            
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Recruiter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
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
                className="cursor-pointer"
              />
            </div>

          </div>



        </form>
      </div>
    </div>
  )
}

export default Signup
