import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img alt="/images/logo.png" src="Logo" />
        <h1>Welcome to Codershouse!</h1>
      </div>
      <p>
        We're working hard to get Codershouse ready for everyone! While we wrap
        up the finish youches, we're adding people gradually to make sure
        nothing breaks
      </p>
      <div>
        <button>
          <span>Get your username</span>
          <img src="/images/arrow-forward.png" alt="arrow" />
        </button>
      </div>
      <div>
        <span>Have an invite link ?</span>
        <Link to="">Sign in</Link>
      </div>
    </div>
  );
};

export default Home;
