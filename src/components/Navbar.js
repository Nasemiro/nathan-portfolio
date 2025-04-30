import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ use Link instead of <a>
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
