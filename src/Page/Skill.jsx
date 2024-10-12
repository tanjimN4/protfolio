import React from 'react';
import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss } from 'react-icons/si';

const Skill = () => {
    return (
        <div className='mx-10'>
            <h1 className='text-center font-bold text-3xl text-black my-10'>Skill & Technologies</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 animationTimeline animationTimeline shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div className="mb-4 animationTimeline">{skill.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h2>
            </div>
          ))}
            </div>
        </div>
    );
};

export default Skill;

const skills=[
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-blue-500 text-4xl" /> },
    {name: "Tailwind CSS",icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,},
    {name: "Firebase",icon: <SiFirebase className="text-yellow-500 text-4xl" />,},
]