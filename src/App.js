import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import MenuList from './Pages/MenuList';
import CartPage from './Pages/CartPage';
import FinalizePage from './Pages/FinalizePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/finalizar" element={<FinalizePage />} />
      </Routes>

      <nav className="bottom-navbar">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/menu" className="navbar-item">Menu</Link>
        <Link to="/cart" className="navbar-item">Cart</Link>
        <Link to="/novidades" className="navbar-item">Novidades</Link>
      </nav>
    </div>
  );
}

export default App;
