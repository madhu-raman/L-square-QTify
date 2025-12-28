import React from "react";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        src={require("../../assets/logo.png")}
        alt="QTify Logo"
        className={styles.logo}
      />
    </div>
  );
}

export default Logo;
