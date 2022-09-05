import React from "react";
import styles from "./itemexpand.module.scss";
import { useSelector } from "react-redux";

const ItemExpand = () => {
  const { itemModal } = useSelector((state) => state.modal);

  return (
    <div className={styles.container}>
      <img src={itemModal.image_full} alt="img" />
    </div>
  );
};

export default ItemExpand;
