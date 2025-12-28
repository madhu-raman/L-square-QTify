import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar searchData={[]} />
        <Hero />
      </div>
    </Router>
  );
}

export default App;