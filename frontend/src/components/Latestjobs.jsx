import React from 'react'
import Latestjobcards from './Latestjobcards'
const randomJobs=[1,2,3,4,5,6,7,8]

const Latestjobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className=' p-3 text-3xl font-bold'> <span className='text-4xl text-[#6A38C2]'>Latest jobs</span> and openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
           {
            randomJobs.slice(0,6).map((item, index) => <Latestjobcards />)
           }
        </div>
    </div>
  )
}

export default Latestjobs