import React from 'react';
import { Link } from 'react-router-dom';
import './Books.css';

function Books() {
  return (
    <div className="books-page">
      <h1>Books</h1>
      <div className="book-card">
        <Link to="/books/linear-algebra" className="book-link">
          Linear Algebra
        </Link>
      </div>
    </div>
  );
}

export default Books;
