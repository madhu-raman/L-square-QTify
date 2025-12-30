import React from 'react';
import { Chip } from '@mui/material';
import styles from './Card.module.css';

const Card = ({ image, follows, title }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.image}
          />
          {/* MUI Chip positioned at top-left of image */}
          <div className={styles.chipContainer}>
            <Chip
              label={`${follows} Follows`}
              size="small"
              sx={{
                backgroundColor: '#121212',
                color: '#FFFFFF',
                fontSize: '10px',
                height: '23px',
                borderRadius: '10px',
                fontFamily: 'Poppins',
                '& .MuiChip-label': {
                  padding: '0 8px',
                }
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.cardBottom}>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;