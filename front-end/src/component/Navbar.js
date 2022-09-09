import './Navbar.css'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruckFast
} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';



function Navbar() {


    return (
        <div className='Navbar'>
            <div className='Nav-logo'>
                <Link to='/' className='Nav-logo'>
                    <FontAwesomeIcon icon={faTruckFast} className='logo-icon'></FontAwesomeIcon>
                    URBAN WASTE COLLECTION AID - UWC 2.0
                </Link>
            </div>

            <div className='Navbar-item-left'>
                <div className='Nav-link'>
                    <Link to='/' className='Nav-link-item'>
                        Home
                    </Link>
                </div>

                <div className='Nav-link'>
                    <Link to='/' className='Nav-link-item'>
                        Calendar
                    </Link>
                </div>
            </div>

            <div className='Navbar-item-right'>
                <div className='Nav-link'>
                    <Link to='/login' className='Nav-link-item'>
                        Search
                    </Link>
                </div>
                <div className='btn-dropdown'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {"Tiếng Việt (VIE)"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/VIE">{"Tiếng Việt (VIE)"}</Dropdown.Item>
                            <Dropdown.Item href="/ENG">{"English (ENG)"}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='btn'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default Navbar;