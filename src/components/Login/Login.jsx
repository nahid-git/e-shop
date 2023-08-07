import React from 'react';
import { Outlet } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>This is login page</h2>
            <Outlet/>
        </div>
    );
};

export default Login;