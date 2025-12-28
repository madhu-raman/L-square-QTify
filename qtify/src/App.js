import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Add sections for Top Albums, New Albums, Songs, etc. */}
    </div>
  );
}

export default App;