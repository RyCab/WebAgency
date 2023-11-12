import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import './styles.css';

export const Home = () => {
    return (
        <div className="home-con">
            <h1>Develop your dreams</h1>
        </div>
    );
}