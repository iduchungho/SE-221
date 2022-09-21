import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import React, {useState} from 'react';


function Toasts() {
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);
    
    return (
        <ToastContainer position="top-center">
            <Toast show={show} onClose={toggleShow} autohide>
                <Toast.Header>
                    <strong className='me-auto'>System</strong>
                    <small className='text-muted'>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    welcome <strong>Kaw4sak1</strong>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Toasts;