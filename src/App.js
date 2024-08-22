// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import MenuList from './Pages/MenuList';
import CartPage from './Pages/CartPage';
import FinalizePage from './Pages/FinalizePage'; // Importe a nova página

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/finalizar" element={<FinalizePage />} /> {/* Adicione a nova rota */}
      </Routes>
    </div>
  );
}

export default App;
