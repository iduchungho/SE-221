import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast
} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

export function loginSite(){
    return (
        <div className='login-wallpaper'>
            <div className='login-container'>
                <div className='login-logo'>
                    <FontAwesomeIcon icon={faTruckFast} className='login-logo-icon'></FontAwesomeIcon>
                    <div>
                        URBAN WASTE<br />
                        COLLECTION
                        AID - UWC 2.0
                    </div>
                </div>
                <div className='login-divider'></div>
                <div className='login-body'>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email or Username</Form.Label>
                            <Form.Control type='email' placeholder='Enter email or username' />
                            <Form.Text>We'll never share your email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>
                        <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Check me out' />
                        </Form.Group>

                        <Button type='submit'>Login</Button>

                    </Form>
                </div>
                <div className='login-divider'></div>
            </div>
        </div>
    )
}

function Login() {
    return (
        <div className='login-wallpaper'>
            <div className='login-container'>
                <div className='login-logo'>
                    <FontAwesomeIcon icon={faTruckFast} className='login-logo-icon'></FontAwesomeIcon>
                    <div>
                        URBAN WASTE<br />
                        COLLECTION
                        AID - UWC 2.0
                    </div>
                </div>
                <div className='login-divider'></div>
                <div className='login-body'>
                    <div className='login-body-header'>
                        <h5>Login using your account on:</h5>
                    </div>
                    <div className='login-body-item' >
                        <Button variant='light' className='login-body-item-btn' href='/login-site'>Back officers </Button>
                    </div>
                    <div className='login-body-item'>
                        <Button variant='light' className='login-body-item-btn'>Collectors and janitors</Button>
                    </div>
                    <div className='login-body-item'>
                        <Button variant='light' className='login-body-item-btn'>Administrator</Button>
                    </div>
                </div>
                <div className='login-divider'></div>
            </div>
        </div>
    );
}

export default Login