import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about/about';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header';
import Home from './components/home/home';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={ <AboutUs /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
