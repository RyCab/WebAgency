import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import { ShoppingCart } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, useMediaQuery } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';

import MarketIcon from '@mui/icons-material/Storefront';
import CollectionIcon from '@mui/icons-material/Collections';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import DashboardIcon from '@mui/icons-material/Dashboard';



export const Navbar = ({totalItems}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const authContext = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null); 
    console.log('current user', currentUser);
    const user = authContext;
    console.log('nav auth', user);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    if (authContext.user){
        console.log('user');
       
    }
    else{
        console.log('no user');
    }

    useEffect(() => {
        if (authContext.user){
            console.log('user');
                   // Fetch the user when the component mounts
            const fetchCurrentUser = async () => {
                try {
                // Use the /users/:id route, where :id is the user's ID from the AuthContext
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}users/${user.user.id}`);
                setCurrentUser(response.data); // Set the fetched user data
                } catch (error) {
                console.error('Error fetching user:', error);
                }
            };
        
            fetchCurrentUser();
        }
    }, [user]);
    return (
        <div>
            <div className="nav">
                <div className="navbar-content">
                    <div className="logo-placeholder">WEB AGENCY</div>
                    <IconButton 
                        className={`menu-button ${menuOpen ? 'menu-open' : ''}`} 
                        onClick={toggleMenu}
                    > 
                        <MenuIcon className="menu-icon" />
                        <CloseIcon className="close-icon" />
                    </IconButton>
                </div>
            </div>

            <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
                <a href="/">
                    <div className="menu-item">
                        {/* <MarketIcon className="menu-icon" /> */}
                        SERVICES
                    </div>
                </a>
                <a href="/Collections">
                    <div className="menu-item">
                        {/* <CollectionIcon className="menu-icon" /> */}
                        ABOUT
                    </div>
                </a>
                <a href="/Collections">
                    <div className="menu-item">
                        {/* <CollectionIcon className="menu-icon" /> */}
                        BLOG
                    </div>
                </a>
                <a href="/Notifications">
                    <div className="menu-item">
                        {/* <NotificationsIcon className="menu-icon" /> */}
                        CONTACT US
                    </div>
                </a>
                
            </div>

            
            {menuOpen && <div className="overlay-right" onClick={toggleMenu}></div>}
        </div>
    );
};
