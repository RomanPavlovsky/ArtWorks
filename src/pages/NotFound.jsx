import React from "react";
import { Link } from "react-router-dom";
import nfimage from "../assets/img/notfound.png";
import styles from "./notfound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={nfimage} alt="404 Not Found" />

        <Link className={styles.back} to="/">
          <div className={styles.icon}> </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
