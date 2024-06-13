import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        <span>{text}</span>
        <img src={`/images/${icon}.png`} alt={icon} className={styles.arrow} />
      </button>
    </div>
  );
};

export default Button;
