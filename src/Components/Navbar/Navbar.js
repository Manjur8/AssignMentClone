import React from 'react';
import "./Navbar.css";
import {Navbar,Button } from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import BottomNavbar from './BottomNavbar';
import icon1 from "../../assets/images/icon34.png";
import icon2 from "../../assets/images/icon35.png";
const Naavbar = () => {
  return (
    <div className='mainNav'>
        <div className='topNavbar'>
            <ul>
                    <li>
                        <img src={icon2} alt="icon" />
                        <a href="@mailto:email89@email.com">email89@email.com</a>
                    </li>
                    <li>
                    <img src={icon1} alt="icon" />
                        <a href="tel:7777778888">+91-7777778888</a>
                    </li>
            </ul>
        </div>
        <Navbar className='navbar_mid'>
            <div className='nav_logo'>
                <img src={logo} alt="logo" />
            </div>
            <Button className='nav_btn'>Log in</Button>
        </Navbar>
        <BottomNavbar />
       
    </div>
  )
}

export default Naavbar