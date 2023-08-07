import React from 'react';
import { Outlet } from 'react-router-dom';

const Orders = () => {
    return (
        <div>
            <h2>This is order page</h2>
            <Outlet/>
        </div>
    );
};

export default Orders;