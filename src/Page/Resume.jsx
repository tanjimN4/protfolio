import React from 'react';
import resume from '../pdf/15-11-24.pdf'

const Resume = () => {
    return (
        <div className="pb-5 reloadanimations mt-16 px-2 w-full flex flex-col items-center gap-5">
            <a
                href='https://drive.google.com/file/d/1oaqUtqW3ibw5kYB9AIJMl93TsLz6yd65/view?usp=sharing'
                download
                target="_blank"
                rel="noopener noreferrer"
                className="p-[2px] bg-gray-50 shadow-sm rounded-md overflow-hidden relative flex justify-center items-center"
            >
                <div className="w-[120%] absolute h-[70%] grid grid-cols-2 rotate">
                    <div className="w-full bg-black"></div>
                    <div className="w-full bg-orange-600"></div>
                </div>
                <div className="flex justify-center rounded-md z-10 items-center gap-3 py-1 px-5 cursor-pointer bg-white">
                    {/* {icon ? icon : null} */}
                    <span className="JosefinSans"> Download Resume</span>
                </div>
            </a>
            <div className="w-full h-screen">
                <iframe src={resume} className="w-full h-full" title="Resume"></iframe>
            </div>
        </div>
    );
};

export default Resume;