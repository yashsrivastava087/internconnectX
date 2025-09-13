import React from 'react'
import { Badge } from './ui/badge'

const Latestjobcards = () => {
  return (
    <div className='p-5 border border-gray-100 bg-white shadow-md rounded-md cursor-pointer'>
        <div>
            <h1 className='text-2xl font-bold'>Company Name</h1>
            <p className='font-bold'>India</p>
        </div>
        <p className='text-sm text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h1 className='font-bold mt-1'>Job Title</h1>
        <div className='flex items-center gap-2 mt-3.5'>
            <Badge className="text-blue-800" variant="outline"> Remote </Badge>
            <Badge className="text-[#6A38C2]" variant="ghost"> 36LPA </Badge>
            <Badge className="text-red-500" variant="ghost"> 10 positions </Badge>
            
        </div>
        
    </div>
  )
}

export default Latestjobcards