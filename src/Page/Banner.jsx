import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import image from '../assets/Screenshot 2024-10-13 000304.png'
const Banner = () => {
    return (
        <div className='m-10 text-slate-600 bg-slate-300 rounded-lg p-5'>
            <div className='lg:flex'>
                <div className='ml-4 lg:ml-10 mt-10 flex-1'>
                    <h1 className='text-xl'>Hi There! It's</h1>
                    <h1 className='text-4xl font-extrabold'>Tanjim</h1>
                    <h1 className='text-3xl font-medium'>Full Stack Web Developer.</h1>
                    <div className="pt-4">
                        <p className="lg:w-1/3 text-xl">
                            <TypeAnimation
                                splitter={(str) => str.split(/(?= )/)}
                                sequence={[
                                    `Hi, I'm Tanjim, a Junior MERN Stack Web Developer. I create responsive, scalable, and efficient web applications using MongoDB, Express.js, React, and Node.js. Let’s collaborate to bring your vision to life.`,
                                    3000,
                                ]}
                                speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                                omitDeletionAnimation={true}
                                style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
                            />
                        </p>
                    </div>
                </div>
                <div className='flex-1'><img className='w-full rounded-lg' src={image} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;
