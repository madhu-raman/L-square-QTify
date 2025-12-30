import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar searchData={[]} />
        <Hero />

        {/* Top Albums Section */}
        <Section
          title="Top Albums"
          apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
        />

        {/* New Albums Section */}
        <Section
          title="New Albums"
          apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
        />
      </div>
    </Router>
  );
}

export default App;