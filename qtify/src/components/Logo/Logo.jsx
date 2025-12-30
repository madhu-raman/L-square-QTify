import React from "react";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src={require("../../assets/logo.png")}
      alt="logo"
      className={styles.logo}
      data-testid="logo"
    />
  );
}

export default Logo;