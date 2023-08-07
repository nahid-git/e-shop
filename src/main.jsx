import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './components/Shop/Shop.jsx';
import Nav from './components/Nav/Nav.jsx';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop></Shop>,
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
