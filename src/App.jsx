import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Shipping from "./pages/Shipping.jsx";
import HomePage from "./pages/HomePage";
import NewArrivals from "./components/NewArrivals.jsx";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("src/assets/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <section className="FrontImage">
        <img src="src/assets/illustrations/Home_01.jpg"></img>
      </section>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <NewArrivals books={books} />
    </div>
  );
}

export default App;
