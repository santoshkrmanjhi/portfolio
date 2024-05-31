import React from 'react'
import { useState } from 'react';
import pic from "../../public/photo.avif"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll";

function Navbar() {
    const [menu,setMenu]=useState(false);
    const navItems=[
        {
        id:1,
        text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contacts"
        },
    ]

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className=" h-12 w-12 rounded-full" alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Santos<span className='text-green-500 text-2xl'>h</span>
                            <p className='text-sm'>Web developer</p>
                        </h1>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8 '>
                           {
                            navItems.map(({id,text})=>(
                                <li key={id} className='hover:scale-105 duration-200 cursor-pointer '>
                                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                                    </li>
                            ))
                           }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoClose size={24} /> : <IoMenu size={24} /> }
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                {menu && (
                    <div className='bg-white'>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
                    {
                            navItems.map(({id,text})=>(
                                <li key={id} className='hover:scale-105 duration-200 cursor-pointer font-semibold'>
                                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active' onClick={() => setMenu(!menu)}>{text}</Link>
                                </li>
                            ))
                    }
                    </ul>
                </div>
                )}
            </div>
        </>
    )
}

export default Navbar