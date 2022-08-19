import React from "react";
import styles from "./itemcard.module.scss";
import { deleteItems } from "../../Redux/Slices/itemsSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ id, title, image, author, user }) => {
  const dispatch = useDispatch();
  const removeOnClick = () => dispatch(deleteItems(id));
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="img" />
      </div>
      <div className={styles.info}>
        <div className={styles.userpic}>
          <img src={user} alt="user" />
        </div>
        <div className={styles.discription}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.author}>
            <p>{author}</p>
          </div>
        </div>
      </div>
      <button onClick={removeOnClick} className={styles.remove}>
        <div className={styles.close}></div>
      </button>
    </div>
  );
};

export default ItemCard;
