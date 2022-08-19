import React from "react";
import styles from "./loader.module.scss";
//use styles loader - loading.io
const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
