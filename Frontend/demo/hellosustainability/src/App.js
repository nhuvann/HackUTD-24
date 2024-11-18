import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Modal from "./components/Modal/modal";
import "./App.css";



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleButtonClick = () => openModal();

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Routes for Navigation */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        
         {/* Modal */}
         <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Sustainable Housing Options</h2>
          <p>
            Learn more about eco-friendly and energy-efficient housing
            alternatives for a greener future!
          </p>
          <button onClick={closeModal}>Close</button>
        </Modal>

        {/* Main Content */}
        <main className="main-content">
          <div className="image-container">
            <img src="/homepage.jpg" alt="Sustainable" />
          </div>
          <button className="explore-button" onClick={handleButtonClick}>
            Explore sustainable housing options!
          </button>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>hello, sustainability!</p>
          <img src="/logo.png" alt="Footer Logo" className="footer-logo" />
        </footer>
      </div>
    </Router>
  );
};

export default App;
