import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import LinearAlgebra from './pages/LinearAlgebra';
import AuthorPage from './pages/AuthorPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/linear-algebra" element={<LinearAlgebra />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </Router>
  );
}

export default App;