"use client"

import React, { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from "@/components/ui/button"
import { toast } from "sonner"
import { Button } from '@/components/ui/button';

import avatar from "../img/avatar.jpeg"


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='xl:fixed xl:top-0 xl:w-screen backdrop-blur-md z-10'>
            <div className='md:flex justify-between items-center'>
                <div className='flex m-4 justify-between items-center'>
                    <div className='flex gap-3 md:gap-5 items-center'>
                        <Avatar>
                            <AvatarImage  src={avatar} alt="claudio.rodriguez.dev"/>
                            <AvatarFallback>CR</AvatarFallback>
                        </Avatar>
                        <h3 className='text-lg lg:text-2xl'>claudio.rodriguez.dev</h3>

                        <a href='https://github.com/claudio-rodriguez-dev' target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className='w-5 h-5 lg:w-7 lg:h-7' />
                        </a>

                        <a href='https://www.linkedin.com/in/claudio-rodriguez-dev/' target="_blank" rel="noopener noreferrer">
                            <LinkedInLogoIcon className='w-5 h-5 lg:w-7 lg:h-7' />
                        </a>

                    </div>

                    <div className='md:hidden'>
                        <button type="button" className="block text-white" onClick={() => { setShowMenu(!showMenu) }}>
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {showMenu ? (
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`pb-2 px-2 md:flex md:pb-0 md:px-0 ${showMenu ? 'block' : 'hidden'}`}>
                    <div className='block'><a href='#home' className={buttonVariants({ variant: "link" })}><p className='text-lg lg:text-xl'>/home</p></a></div>
                    <div className='block'><a href='#experience' className={buttonVariants({ variant: "link" })}><p className='text-lg lg:text-xl'>/experience</p></a></div>
                    <div className='block'>
                        <Button variant='link' onClick={() => toast("Coming soon!")}>
                        <p className='text-lg lg:text-xl cursor-pointer'>/projects</p>
                        </Button>
                        </div>
                    <div className='block'><a href='#contact' className={buttonVariants({ variant: "link"})}><p className='text-lg lg:text-xl'>/contact</p></a></div>
                </div>
            </div>
            <Separator />
        </div>
    );
};

export default NavBar;
