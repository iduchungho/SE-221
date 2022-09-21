import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

// import Navbar from './component/Navbar';
// import Login from './pages/Login';
// import Tutorial from './pages/tutorial';
import NavbarTop from './component/Navbar/NavbarTop'
import NavbarBottom from './component/Navbar/NavbarBottom';
import Home from './pages/Home';
import Login from './component/Login/Login';
import LoginSite from './component/Login/LoginSite';
import User from './component/user/user'
function App() {
    return (
        <>
            <Router>
                <NavbarTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/login-site' element={<LoginSite />} />
                    <Route path='/user' element={<User />} />
                </Routes>
                <NavbarBottom />
            </Router>
        </>
    );
}

export default App;
