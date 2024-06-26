import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, icon, children }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <img alt={`/images/${icon}.png`} src={`icon`} />
          <h1 className={styles.heading}>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
