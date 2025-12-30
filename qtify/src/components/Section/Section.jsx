import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false); // Changed to false - show cards by default

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setAlbums(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching albums:', error);
      setLoading(false);
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          onClick={toggleCollapse}
          className={styles.collapseButton}
        >
          {collapsed ? 'Show all' : 'Collapse'}
        </button>
      </div>

      {/* Grid of Cards */}
      {!collapsed && (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;