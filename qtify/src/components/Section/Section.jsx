import React, { useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({ title, data, type, filterData = null }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: 'all', label: 'All' }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  // Initialize filters when filterData is provided
  React.useEffect(() => {
    if (filterData && filterData.length > 0) {
      const newFilters = [
        { key: 'all', label: 'All' },
        ...filterData.map((item) => ({ key: item.key, label: item.label }))
      ];
      setFilters(newFilters);
    }
  }, [filterData]);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  const handleFilterChange = (index) => {
    setSelectedFilterIndex(index);
  };

  // Filter data based on selected tab
  const getFilteredData = () => {
    if (!filterData || selectedFilterIndex === 0) {
      return data;
    }

    const selectedFilter = filters[selectedFilterIndex];
    return data.filter((item) => item.genre.key === selectedFilter.key);
  };

  const filteredData = getFilteredData();

  // Don't show toggle button for songs section
  const showToggleButton = type !== 'song';

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {showToggleButton && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? 'Show all' : 'Collapse'}
          </h4>
        )}
      </div>

      {/* Show tabs only for songs section */}
      {type === 'song' && filterData && (
        <div className={styles.tabsWrapper}>
          <BasicTabs
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            onChange={handleFilterChange}
          />
        </div>
      )}

      {/* Always show carousel for songs, toggle for albums */}
      {(type === 'song' || carouselToggle) ? (
        <Carousel data={filteredData} type={type} />
      ) : (
        <div className={styles.grid}>
          {filteredData.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;