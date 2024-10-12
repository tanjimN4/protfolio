import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HireMe = () => {
    return (
        <div className='m-10'>
            <h1 className='text-3xl text-center  font-bold my-10'>Why You Should Hire Me</h1>
            <p className='text-lg mx-20 font-medium text-black'>
            <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[
                    `I’m a skilled web developer with a strong foundation in both front-end and back-end technologies like React, Node.js, and MongoDB. I thrive in solving complex problems, writing clean, maintainable code, and delivering user-friendly, high-performance websites. I’m constantly learning and adapting to new tools, ensuring that I stay on the cutting edge of web development.`,
                    3000,
                ]}
                speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                omitDeletionAnimation={true}
                style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
            />
            </p>
        </div>
    );
};

export default HireMe;