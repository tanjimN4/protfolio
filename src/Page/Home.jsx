import React from 'react';
import About from './About'
import Skill from './Skill';
import Banner from './Banner';
import HireMe from './HireMe';
import Contact from './Contact';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <HireMe></HireMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;