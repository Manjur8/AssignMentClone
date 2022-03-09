import React from 'react';
import "./Navbar.css";
import {Navbar,Button, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import BottomNavbar from './BottomNavbar';
import icon1 from "../../assets/images/icon34.png";
import icon2 from "../../assets/images/icon35.png";
import { Link, useNavigate } from 'react-router-dom';
const Naavbar = () => {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate()

    const logout =()=>{
        localStorage.clear();
        navigate('/login')
    }
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
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            {localStorage.getItem("user-info")?
            <Nav>
                <NavDropdown title={user.result.userdata.name}>
                    <NavDropdown.Item><Link to="/edit">Update Profile</Link></NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav> :  <Button className='nav_btn'> <Link to="/login" className='btn'>Log in</Link></Button>
            }
        </Navbar>
        <BottomNavbar />
       
    </div>
  )
}

export default Naavbar