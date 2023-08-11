import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about/about';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from "./components/log/login";
import Register from "./components/log/register";
import Terminosycondiciones from "./components/log/terminos-y-condiciones";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={ <AboutUs /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/terminos-y-condiciones' element={ <Terminosycondiciones /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
