import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover.jsx'
import { Avatar, AvatarImage } from '../ui/avatar.jsx'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'> Intern<span className='text-[#a3bc00]'>connectX </span></h1>
                </div>

                <div className=' flex items-center gap-6'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>

                    </ul>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent>
                        <h1>hello</h1>
                    </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Navbar