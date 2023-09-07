import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Shop from './components/Shop/Shop.jsx';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import Nav from "./components/Nav/Nav.jsx";
// import Product from "./components/Product/Product.jsx";
// import store from "./redux/store/store.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav/>,
        children: [
            {
                path: "/",
                element: <Shop/>
            },
            {
                path: "/orders",
                element: <Orders/>
            },
            {
                path: "/inventory",
                element: <Inventory/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/*",
                element: <h1>Sorry :( Page not Found.</h1>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<Product store={store}>*/}
            <RouterProvider router={router}/>
        {/*</Product>*/}
    </React.StrictMode>,
)
