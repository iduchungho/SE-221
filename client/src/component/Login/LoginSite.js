import './Login.css'

import {FontAwesomeIcon}        from '@fortawesome/react-fontawesome';
import {useState}               from 'react'
import {useNavigate}            from 'react-router-dom'
import axios                    from 'axios';
import React                    from 'react';
import Button                   from 'react-bootstrap/esm/Button';
import Form                     from 'react-bootstrap/Form';
import {
    faTruckFast
}from '@fortawesome/free-solid-svg-icons';

import backendUrl from '../config/backendUrl';
function LoginSite() {

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async () => {
        const {data} = await axios.post(`${backendUrl}/login`, ({username,password}),{withCredentials: true});
        if(data.state === "success") {
            const {user} = data;
            localStorage.setItem('userId',user._id);
            navigate('/user');
            window.location.reload();
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
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
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group controlId='formBasicEmail' className='form-group'>
                            <Form.Label>Email or Username</Form.Label>
                            <Form.Control value = {username}  onChange = {e => setUsername(e.target.value)} type='username' placeholder='Enter email or username' />
                            <Form.Text>We'll never share your email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword' className='form-group'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control value = {password}  onChange = {e => setPassword(e.target.value)} type='password' />
                        </Form.Group>
                        <Form.Group controlId='formBasicCheckbox' className='form-group'>
                            <Form.Check type='checkbox' label='Check me out' />
                        </Form.Group>
                        <Button onClick = {handleLogin} type='submit' className='login-form-btn' >Login</Button>
                    </Form>
                </div>
                <div className='login-divider'></div>
            </div>
        </div>
    )
}

export default LoginSite;