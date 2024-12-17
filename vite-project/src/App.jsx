import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '20px',
                padding: '10px 20px',
                margin: 0,
                marginTop: '10px',
                backgroundColor: 'black',
                color: 'white',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000
                
            
              }}
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
