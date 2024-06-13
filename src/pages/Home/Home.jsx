import React from "react";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const history = useHistory();
  const startRegistration = () => {
    history.push("/register");
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo  ">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finish youches, we're adding people gradually to make sure
          nothing breaks
        </p>
        <Button
          onClick={startRegistration()}
          text="Get your username"
          icon="arrow-forward"
        />
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite link ?</span>
          <Link style={signInLinkStyle} to="">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
