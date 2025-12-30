import React from 'react';
import styles from './Card.module.css';
import { Chip } from '@mui/material';

const Card = ({ data, type }) => {
  const { image, title, follows, likes, songs } = data;

  // Determine chip label and value based on type
  const getChipInfo = () => {
    if (type === 'song') {
      return { label: 'Likes', value: likes };
    }
    return { label: 'Follows', value: follows };
  };

  const chipInfo = getChipInfo();

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImage}>
          <img src={image} alt={title} />
          <div className={styles.cardChip}>
            <Chip
              label={`${chipInfo.value} ${chipInfo.label}`}
              size="small"
              className={styles.chip}
              sx={{
                backgroundColor: '#121212',
                color: '#FFFFFF',
                fontSize: '10px',
                height: '23px',
                borderRadius: '10px',
                fontWeight: 400
              }}
            />
          </div>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>{title}</p>
          {type !== 'song' && songs && (
            <p className={styles.cardSongs}>{songs.length} songs</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;