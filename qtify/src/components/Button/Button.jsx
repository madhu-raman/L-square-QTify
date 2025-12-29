import React from 'react';
import styles from './Button.module.css';

function Button({ children, ...props }) {
  return (
    <button className={styles.button} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;