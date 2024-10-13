import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../assets/Screenshot 2024-10-13 000304.png'
const About = () => {
    const location = useLocation()

    return (
        <div>
            {
                location.pathname === '/about' ?
                    <div className='m-10'>
                        <div className="lg:flex items-center bg-gray-100 py-14 rounded-lg shadow-md w-full  mx-auto">
                            <div className="lg:w-1/2 flex justify-center">
                                <img src={image} alt="Animated character with glasses and a laptop" className="w-24 h-24 rounded-full" />
                            </div>
                            <div className="lg:w-1/2 border-l-2 border-gray-300 pl-6">
                                <h1 className="text-2xl font-bold font-nunito">Tanjim</h1>
                                <p className="text-gray-700"><strong>Mobile:</strong> +88 01975886500 (WhatsApp) | +88 01975886500</p>
                                <p className="text-gray-700"><strong>Email:</strong> tanjimahemed7@gamil.com</p>
                                <p className="text-gray-700"><strong>Social:</strong> LinkedIn | GitHub |</p>
                                <p className="text-gray-700"><strong>Address:</strong> Chandpur, Chandpur Shader, Bangladesh</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-3xl text-center font-bold my-10'>My Educational Journey</h1>
                            <div className=' bg-gray-100 rounded-xl p-4 lg:w-1/2 mt-5 mb-5'>
                                <h1 className='text-2xl font-semibold'>Complete Web Development Course - 2024</h1>
                                <p className='text-lg'>Programming Hero</p>
                                <p>.</p>
                            </div>
                            <div className='lg:flex lg:justify-end'>
                                <div className=' bg-gray-100 rounded-xl p-4 lg:w-1/2'>
                                    <h1 className='text-2xl font-semibold'>HSC -2023</h1>
                                    <p className='text-lg'>Puran Bazar Degree Collage</p>
                                    <p className='text-lg'>Chandpur,Puran Bazar</p>
                                </div>
                            </div>
                            <div className=' bg-gray-100 rounded-xl p-4 lg:w-1/2 mt-5'>
                                <h1 className='text-2xl font-semibold'>SSC -2021</h1>
                                <p className='text-lg'>Rofiqul Islam School And Collage</p>
                                <p className='text-lg'>Dhaka,Demra</p>
                            </div>
                        </div>
                    </div>
                    : <div className='mx-10 lg:flex'>
                        <div className='m-5 flex-1 justify-center items-center'>
                            <div className='flex justify-center'><img className=' h-[500px] object-cover object-top border-2' src="https://i.ibb.co.com/LnxHy2Z/IMG-20240629-201958-removebg-preview.png" alt="" /></div>
                        </div>
                        <div className='relative flex-1'>
                            {/* Span is now only visible on large devices */}
                            <span className='hidden lg:flex lg:border-l-2 absolute mt-5 h-auto lg:h-[500px] border-slate-400'></span>
                            <div className='pl-2'>
                                <h1 className='text-3xl font-extrabold text-slate-500 mb-5'>About Me</h1>
                                <p className='font-medium'>
                                    Hello! I'm Tanjim, a Junior MERN Stack Developer with a passion for building dynamic and scalable web applications. I specialize in working with the MERN stack, which includes MongoDB, Express.js, React, and Node.js. My journey in web development has equipped me with a solid understanding of both frontend and backend technologies, allowing me to create full-stack applications that deliver seamless user experiences.
                                </p>
                                <p className='font-medium mt-5'>
                                    I have a strong foundation in HTML, CSS, and JavaScript, and I'm proficient in using React to build responsive, interactive interfaces. On the backend, I work with Node.js and Express.js to develop robust APIs and manage server-side logic. I also leverage MongoDB for database management, ensuring that data is efficiently stored and retrieved.
                                </p>
                                <Link to='/about'><button className='pt-5'>Read More..</button></Link>
                            </div>
                        </div>
                    </div>

            }
        </div>

    );
};

export default About;