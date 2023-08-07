import React from 'react';
import { Outlet } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h2>This is Inventory page</h2>
            <Outlet/>
        </div>
    );
};

export default Inventory;