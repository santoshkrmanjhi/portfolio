import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";
import pic from "../../public/myPhoto.png"





function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed </span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer","Programmer","Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify '>I am a passionate Information Technology student at Kalinga Institute of Industrial Technology, currently pursuing a B.Tech degree. With a strong foundation in web development, C programming, Java, and DBMS, I'm enthusiastic about creating innovative solutions that blend technology and user experience seamlessly. Eager to contribute my skills and learn in a dynamic environment, I'm driven by a curiosity to explore new challenges and collaborate with like-minded professionals.Now i am learning python and Data analysis.</p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Available on </h1>
                                <ul className='flex space-x-5'>
                                    <li><a href="https://www.facebook.com/profile.php?id=100073159735803&mibextid=ZbWKwL" target='_blank'><FaFacebook className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="https://www.linkedin.com/in/santosh-kumar-manjhi-563861289" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a></li>
                                    <li><FaTelegram className='text-2xl cursor-pointer' /></li>
                                    <li><IoLogoWhatsapp className='text-2xl cursor-pointer' /></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working on </h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right-side */}
                    <div className='md:w-1/2 md:ml-48 md:mt-16 mt-6 order-1'>
                        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] ' alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Home