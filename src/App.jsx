import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Genres from "./pages/Genres"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shipping from "./pages/Shipping"

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
        <Route path="/shipping" element={ <Shipping /> } />
      </Routes>
    </div>
    
  );
}

export default App;
