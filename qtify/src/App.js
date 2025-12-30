import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import './App.css';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch Top Albums
    fetch('https://qtify-backend.labs.crio.do/albums/top')
      .then(res => res.json())
      .then(data => setTopAlbums(data))
      .catch(err => console.error('Error fetching top albums:', err));

    // Fetch New Albums
    fetch('https://qtify-backend.labs.crio.do/albums/new')
      .then(res => res.json())
      .then(data => setNewAlbums(data))
      .catch(err => console.error('Error fetching new albums:', err));

    // Fetch Songs
    fetch('https://qtify-backend.labs.crio.do/songs')
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(err => console.error('Error fetching songs:', err));

    // Fetch Genres
    fetch('https://qtify-backend.labs.crio.do/genres')
      .then(res => res.json())
      .then(data => {
        const transformedGenres = data.data.map(genre => ({
          key: genre.key,
          label: genre.label
        }));
        setGenres(transformedGenres);
      })
      .catch(err => console.error('Error fetching genres:', err));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />

        {/* Top Albums Section */}
        <Section
          title="Top Albums"
          data={topAlbums}
          type="album"
        />

        {/* New Albums Section */}
        <Section
          title="New Albums"
          data={newAlbums}
          type="album"
        />

        {/* Songs Section with Tabs */}
        <Section
          title="Songs"
          data={songs}
          type="song"
          filterData={genres}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;