import React, { useState } from 'react';
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
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/contact">Contact</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
