import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './components/AboutUs/AboutUs';
import TopNav from './components/TopNav/TopNav';
import ContactNav from './components/ContactNav/ContactNav';
import OurProducts from './components/OurProducts/OurProducts';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import './App.css';


function App() {
  return (
    <Router>
      <ContactNav />
      <TopNav />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
