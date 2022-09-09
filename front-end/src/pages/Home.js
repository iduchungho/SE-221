import './Home.css'

import Button from 'react-bootstrap/Button';

function Home(){
    return(
        <div className = 'home-page'>
            <div className='title'>
                <h1>URBAN WASTE COLLECTION AID - UWC 2.0</h1>
                <Button className='btn-title'>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default Home;