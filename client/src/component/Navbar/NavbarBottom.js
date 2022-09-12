import './NavbarBottom.css'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/esm/Container';

function NavbarBottom(){
    return (
        <>
            <Navbar fixed='bottom' bg = 'light'>
                <Container fluid>
                    <Navbar.Brand>SE 2022 Project</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarBottom;