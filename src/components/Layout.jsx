import React from "react";
import Navbar from "./NavbarComponents/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () =>{


    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout ;