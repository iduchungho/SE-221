import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';


import './Navbar-bootstrap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function NavbarBootstrap() {
    const[show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <>
            <Navbar key={true} bg="light"  expand={'md'} className="mb-3" fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <div className='logo'>
                            <FontAwesomeIcon icon={faTruckFast} className='logo-icon'></FontAwesomeIcon>
                            URBAN WASTE <br/> COLLECTION <br/> AID - UWC 2.0
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'md'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`} className = "title-offcanvas">
                                <FontAwesomeIcon icon={faTruckFast} className='logo-icon-offcanvas'></FontAwesomeIcon>
                                URBAN WASTE <br /> COLLECTION  AID - UWC 2.0
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="jstiufy-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/" className='nav-item'>Home</Nav.Link>
                                <Nav.Link href="tutorial" className = 'nav-item'>Tutorial</Nav.Link>
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
                                
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="light" className='btn-search'>
                                    <FontAwesomeIcon icon = {faMagnifyingGlass}/>
                                </Button>
                            </Form>
                            <Button variant="primary" className='btn-login' onClick={handleShow}>Login</Button>

                            <Modal show = {show} onHide = {handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className='modal-title'>
                                        <FontAwesomeIcon icon={faTruckFast} className='logo-icon-Modal'></FontAwesomeIcon>
                                        URBAN WASTE <br /> COLLECTION <br /> AID - UWC 2.0
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group controlID='formBasicEmail'>
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control type = 'email' placeholder="Enter Email or Email"/>
                                            <Form.Text>
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlID='formBasicPassword'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type = 'password'/>
                                        </Form.Group>
                                        <Form.Group controlId='formBasicCheckbox'>
                                            <Form.Check type='checkbox' label = 'remember me'></Form.Check>
                                        </Form.Group>
                                        <br/>
                                        <Button variant='primary' type = 'submit'>Login</Button>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                </Modal.Footer>
                            </Modal>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarBootstrap;