import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './Tabs.module.css';

const BasicTabs = ({ filters, selectedFilterIndex, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <div className={styles.tabsContainer}>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="genre tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#34C94B',
            height: '4px'
          }
        }}
        sx={{
          '& .MuiTabs-flexContainer': {
            gap: '16px'
          },
          minHeight: '48px'
        }}
      >
        {filters.map((filter, index) => (
          <Tab
            key={filter.key}
            label={filter.label}
            className={styles.tab}
            sx={{
              color: '#FFFFFF',
              textTransform: 'capitalize',
              fontSize: '16px',
              fontWeight: 600,
              minHeight: '48px',
              padding: '12px 16px',
              '&.Mui-selected': {
                color: '#34C94B'
              },
              '&:hover': {
                color: '#34C94B',
                opacity: 0.8
              }
            }}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default BasicTabs;