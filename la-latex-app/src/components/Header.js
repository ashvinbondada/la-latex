import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/books" className="nav-link">Books</Link>
        <Link to="/author" className="nav-link">Author</Link>
      </nav>
    </header>
  );
}

export default Header;
