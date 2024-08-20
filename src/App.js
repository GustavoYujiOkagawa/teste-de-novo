import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home';
import MenuList from './Pages/MenuList';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuList />} />
    </Routes>
    </div>
  );
}

export default App;
