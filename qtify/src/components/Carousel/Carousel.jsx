import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';

const Carousel = ({ data, renderItem }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={7}
        navigation
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // Tablet
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // Small Desktop
          1024: {
            slidesPerView: 5,
            spaceBetween: 25
          },
          // Large Desktop
          1440: {
            slidesPerView: 7,
            spaceBetween: 30
          }
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;