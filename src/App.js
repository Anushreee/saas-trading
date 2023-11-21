import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import TopNav from "./components/TopNav/TopNav";
import ContactNav from "./components/ContactNav/ContactNav";
import OurProducts from "./components/OurProducts/OurProducts";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import useDeviceType from "./hooks/useDeviceType";
import { DEVICE_TYPE } from "./utils/constants";
import "./App.css";

function App() {
  const [displayTopNav, setDisplayTopNav] = useState(false);
  const deviceType = useDeviceType();
  return (
    <Router>
      <ContactNav setDisplayTopNav={setDisplayTopNav} />
      {deviceType === DEVICE_TYPE.MOBILE && displayTopNav && <TopNav setDisplayTopNav={setDisplayTopNav}/>}
      {deviceType !== DEVICE_TYPE.MOBILE && <TopNav />}
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
