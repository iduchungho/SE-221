import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';
import NavbarBootstrap from './component/Navbar-bootstrap'
import BottomNavbar from './component/BottomNavbar';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <NavbarBootstrap/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path = '/login' element = {<Login/>}/>
          </Routes>
        <BottomNavbar/>
      </Router>
    </>
  );
}

export default App;
