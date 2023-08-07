import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Outlet/>
        </div>
    );
};

export default About;