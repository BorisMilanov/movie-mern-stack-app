import React from 'react'
import CollectedMovies from "./pages/CollectedMovies";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css"

const App = () => {
  return (<Router>
    <nav className="navbars">
      <Link to="/" className="link">Home</Link>
      <Link to="/collectedmovies" className="link">My movie collection</Link>
      <Link to="/about" className="link">About</Link>
    </nav>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/collectedmovies" element={<CollectedMovies />} />
      <Route path="/about" element={<About />} />
    </Routes><footer className='footer'> <p>Author: Boris Milanov</p>
  <a href="boris.mil.96@gmail.com">boris.mil.96@gmail.com</a></footer> </Router>)

}

export default App;
