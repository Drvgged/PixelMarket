import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header';
import Home from './components/home/home';
import Products from './components/products/products';
import AmongUsSprite from './components/products/productos-por-separado/AmongUsSprite';
import FoxSprite from './components/products/productos-por-separado/FoxSprite';
import GangsterSprite from './components/products/productos-por-separado/GangsterSprite';
import LarioSprite from './components/products/productos-por-separado/LarioSprite';
import WarriorSprite from './components/products/productos-por-separado/WarriorSprite';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />}/>
          <Route path="/products/among-sprite" element={<AmongUsSprite />}/>
          <Route path="/products/foxSprite" element={<FoxSprite />}/>
          <Route path="/products/gangster-sprite" element={<GangsterSprite />}/>
          <Route path="/products/lario-sprite" element={<LarioSprite />}/>
          <Route path="/products/warrior-sprite" element={<WarriorSprite />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
