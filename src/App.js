import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Nav";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import SignIn from "./components/Register/Register";
import Login1 from "./components/Sign_in/Signin";
import Services from "./components/services/Services";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/signin" element={<Login1 />} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
