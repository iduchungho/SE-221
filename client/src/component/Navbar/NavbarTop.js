import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';


import './NavbarTop.css'
import { Language } from '../config/configLanguage';

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

    const [language, setLanguage] = useState(true);
    const VIE = 'Tiếng Việt (vi)';
    const US = 'English (en-US)';

    const handleClick = () => {
        setLanguage(!language);
    }


    return (
        <>
            <Navbar key={true} bg="light" expand={'md'} fixed='top'>
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
                                <Nav.Link href="/" className='nav-item'>{language ? Language.VIE.Home : Language.ENG.Home}</Nav.Link>
                                <Nav.Link href="tutorial" className='nav-item'>{language ? Language.VIE.Tutorial : Language.ENG.Tutorial}</Nav.Link>
                                <Nav.Link href="my-calendar" className='nav-item'>{language ? Language.VIE.Calendar : Language.ENG.Calendar}</Nav.Link>

                                {/* NavDropdown table content */}
                                <NavDropdown
                                    title= {language ? VIE : US}
                                    id={`offcanvasNavbarDropdown-expand-${'md'}`}
                                >
                                    <NavDropdown.Item onClick={language ? language : handleClick}>
                                        {VIE}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={language ? handleClick : language}>
                                        {US}
                                    </NavDropdown.Item>
                                </NavDropdown>

                                {/* Thanh tim kiem */}
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder={language ? Language.VIE.Search : Language.ENG.Search}
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="light" className='btn-icon'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </Form> */}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* Nut dang nhap */}
                    <Navbar.Brand className='btn-login'>
                        <Button variant="primary" >
                            <Nav.Link href="Login">{language ? Language.VIE.Login : Language.ENG.Login}</Nav.Link>
                        </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarTop;