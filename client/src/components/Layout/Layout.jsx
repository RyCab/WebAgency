import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import './styles.css';

export const Layout = () => {
    return (
        <div className="layout-con">
            <Navbar/>
            <Outlet />
        </div>
    );
}