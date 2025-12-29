import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero_headphone.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h2>100 Thousand Songs, ad-free</h2>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className={styles.heroImage}>
          <img src={HeroImage} alt="Headphones" />
        </div>
      </div>
    </div>
  );
}

export default Hero;