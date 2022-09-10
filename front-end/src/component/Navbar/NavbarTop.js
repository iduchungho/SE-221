import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Modal from 'react-bootstrap/Modal';
// import React, { useState } from 'react';


import './NavbarTop.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast,
    faMagnifyingGlass,
    // faComment,
    // faBell
} from '@fortawesome/free-solid-svg-icons';

function NavbarTop() {
    // const[show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);


    return (
        <>
            <Navbar key={true} bg="light" expand={'xl'} fixed='top'>
                <Container fluid className='nav-container'>
                    
                    {/* Toggle off canvas content */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} className = 'toggle'/>
                    
                    {/* Logo chinh cua project */}
                    <Navbar.Brand href="/" className='navbar-logo'>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faTruckFast} className='logo-icon'></FontAwesomeIcon>
                            URBAN WASTE <br /> COLLECTION <br /> AID - UWC 2.0
                        </div>
                    </Navbar.Brand>

                    {/* Off canvas */}
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'md'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                        placement="start"
                        className="offcanvas-navbar"
                    >
                        {/* Logo Header off canvas */}
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`} className = "title-offcanvas">
                                <FontAwesomeIcon icon={faTruckFast} className='logo-icon-offcanvas'></FontAwesomeIcon>
                                URBAN WASTE <br /> COLLECTION  AID - UWC 2.0
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        
                        {/* Body off canvas */}
                        <Offcanvas.Body>
                            <Nav className="jstiufy-content-end flex-grow-1 pe-3">

                                {/* item off canvas */}
                                <Nav.Link href="/" className='nav-item'>Home</Nav.Link>
                                <Nav.Link href="tutorial" className = 'nav-item'>Tutorial</Nav.Link>
                                <Nav.Link href="my-calendar" className = 'nav-item'>My Calendar</Nav.Link>

                                {/* NavDropdown table content */}
                                <NavDropdown
                                    title="Tiếng Việt (vi)"
                                    id={`offcanvasNavbarDropdown-expand-${'md'}`}
                                >
                                    <NavDropdown.Item href="VIE">
                                        {"Tiếng Việt (vi)"}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="ENG">
                                        {"English (en-us)"}
                                    </NavDropdown.Item>
                                </NavDropdown>

                                {/* Thanh tim kiem */}
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="light" className='btn-icon'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </Form>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* Nut dang nhap */}
                    <Navbar.Brand className='btn-login'>
                        <Button variant="primary" >
                            <Nav.Link href="Login">Login</Nav.Link>
                        </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarTop;