import React from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Shipping from "./pages/Shipping.jsx";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="FrontImage">
        <img src="src/assets/illustrations/Home_01.jpg"></img>
      </section>

      <Routes>
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </div>
  );
}

export default App;
