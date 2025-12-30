import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';
import Card from '../Card/Card';

const Carousel = ({ data, type }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={7}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 30
          }
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card data={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons positioned on the sides */}
      <button
        ref={prevRef}
        className={styles.navButton}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        ref={nextRef}
        className={styles.navButton}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;