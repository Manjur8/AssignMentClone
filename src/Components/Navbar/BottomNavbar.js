import React, {useState} from 'react';
import "./Navbar.css";
import { Nav,Navbar, Container, NavDropdown, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import {Link} from "react-router-dom";
const BottomNavbar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="lg" className='buttonNavbar'>
        <Container fluid className='buttonNavItems'>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
            <Navbar.Collapse >
                    <Nav className="me-auto my-2 my-lg-0 lg_nav">
                                    <Nav><Link to="/" className="navItem">Home</Link></Nav>
                                    <NavDropdown title="Categories" id="navItem">
                                        <NavDropdown.Item><Link to="/home" className="navItem_dropDown">Vegetables</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Dairy</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Grocery</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Fruits</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Organic</NavDropdown.Item>
                                    
                                    </NavDropdown>
                                </Nav>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                     </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto my-2 my-lg-0">
                            <Nav.Link href="#action1" className="navItem" active onClick={handleClose}>Home</Nav.Link>
                            <NavDropdown title="Categories" className="navItem">
                                <NavDropdown.Item href="#action3" onClick={handleClose}>Vegetables</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={handleClose}>Dairy</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={handleClose}>Grocery</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={handleClose}>Fruits</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={handleClose}>Organic</NavDropdown.Item>
                            
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>   
            </Navbar.Collapse>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="formEle"
                    aria-label="Search"
                    />
                    <Button variant="outline-success formEle formbutton"></Button>
                </Form>
            </Container>
        </Navbar>
    </>
  )
}

export default BottomNavbar