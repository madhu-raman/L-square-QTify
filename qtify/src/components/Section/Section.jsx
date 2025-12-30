import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';

const Section = ({ title, apiEndpoint, type = 'albums' }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCarousel, setShowCarousel] = useState(true); // true = show carousel initially

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const toggleView = () => {
    setShowCarousel(!showCarousel);
  };

  // Function to render the appropriate card type
  const renderCard = (item) => {
    return (
      <Card
        image={item.image}
        follows={item.follows}
        title={item.title}
      />
    );
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
          onClick={toggleView}
          className={styles.collapseButton}
        >
          {showCarousel ? 'Show all' : 'Collapse'}
        </button>
      </div>

      {/* Conditional Rendering: Grid OR Carousel */}
      {showCarousel ? (
        // Show Carousel
        <Carousel data={data} renderItem={renderCard} />
      ) : (
        // Show Grid
        <div className={styles.grid}>
          {data.map((item) => (
            <div key={item.id}>
              {renderCard(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;