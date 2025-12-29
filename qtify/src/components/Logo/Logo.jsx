import React from "react";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        src={require("../../assets/logo.png")}
        alt="logo"
        className={styles.logo}
        data-testid="logo"
      />
    </div>
  );
}

export default Logo;