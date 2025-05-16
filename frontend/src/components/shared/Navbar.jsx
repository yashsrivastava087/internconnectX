import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover.jsx'
import { Avatar, AvatarImage } from '../ui/avatar.jsx'
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let user = false;
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

                    {
                        !user ? (
                            <div className='flex items-center gap-3'>
                                <Link to="/login">
                                <Button
                                    variant="ghost"
                                    className="bg-gray-50 text-black hover:bg-black hover:text-white  cursor-pointer"
                                >
                                    Login
                                </Button>
                                </Link>
                                <Link to="/signup"><Button variant="outline" className=" bg-[#c1d63a] hover:bg-[#a3bc00] cursor-pointer">Signup</Button></Link>
                                    
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>

                                <PopoverContent className="w-80">

                                    <div className='flex items-center gap-5 space-y-1'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>

                                        <div>
                                            <h2 className='font-medium'>Yash Srivastava</h2>
                                            <p className='text-sm text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col text-gray-600'>

                                        <div className='flex w-fit my-2 items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link">View profile</Button>
                                        </div>
                                        <div className='flex w-fit items-center  gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>

                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>-
        </div>
    )
}

export default Navbar