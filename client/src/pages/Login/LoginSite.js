import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import './LoginSite.css'

function LoginSite() {
    return (
        <div className='backgroud-site'>
            <div className='login-form-container'>

                <div className='login-logo-container'>
                    login logo container navbar

                </div>


                <div className='login'>
                    <div className='login-form'>
                        <div className='header-login-form'>

                            Login
                        </div>
                        <div className='body-login-form'>
                            <Form>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label>Email or Username</Form.Label>
                                    <Form.Control type = 'email' placeholder = 'Enter email or username'/>
                                    <Form.Text>We'll never share your email with anyone else</Form.Text>
                                </Form.Group>
                                <Form.Group controlId ='formBasicPassword'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type = 'password'/>
                                </Form.Group>
                                <Form.Group controlId ='formBasicCheckbox'>
                                    <Form.Check type = 'checkbox' label = 'Check me out'/>
                                </Form.Group>

                                <Button type = 'submit'>Login</Button>

                            </Form>
                        </div>
                    </div>
                    <div className='login-backgroud'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSite;