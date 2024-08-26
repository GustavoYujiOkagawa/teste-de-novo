import React from 'react';
import { Route, Routes, Link, useLocation  } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import MenuList from './Pages/MenuList';
import CartPage from './Pages/CartPage';
import FinalizePage from './Pages/FinalizePage';
import { navCart, navCartblack, navHome, navHomeblack, navMenu, navMenublack, navPromo, navPromoblack } from './constants';


function App() {

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/finalizar" element={<FinalizePage />} />
       
      </Routes>
      <nav className="bottom-navbar">
      <Link to="/" className={`navbar-item ${currentPath === '/' ? 'active': ''}`}>
        <img src={currentPath === '/' ? navHome : navHomeblack} width={18} alt="Home" />
      </Link>
      <Link to="/menu" className={`navbar-item ${currentPath === '/menu' ? 'active' : ''}`}>
        <img src={currentPath === '/menu' ? navMenu : navMenublack} width={18} alt="Menu" />
      </Link>
      <Link to="/cart" className={`navbar-item ${currentPath === '/cart' ? 'active' : ''}`}>
        <img src={currentPath === '/cart' ? navCart : navCartblack} width={18} alt="Cart" />
      </Link>
      <Link to="/novidades" className={`navbar-item ${currentPath === '/novidades' ? 'active' : ''}`}>
        <img src={currentPath === '/novidades' ? navPromo : navPromoblack} width={18} alt="Novidades" />
      </Link>
    </nav> 
    </div> 
  );
}

export default App;
 