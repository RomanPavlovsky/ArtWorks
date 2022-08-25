import React from "react";
import styles from "./itemcard.module.scss";
import { deleteItems } from "../../Redux/Slices/itemsSlice";
import { setOpenItemModal } from "../../Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ItemCard = ({ id, title, image, author, user }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const removeOnClick = () => dispatch(deleteItems(id));
  const saveOnClick = () => dispatch(deleteItems(id));
  const openItemModal = () => dispatch(setOpenItemModal());
  return (
    <div className={styles.container}>
      <div onClick={openItemModal} className={styles.image}>
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
      {pathname === "/saved" && (
        <button onClick={removeOnClick} className={styles.remove}></button>
      )}
      {pathname === "/" && (
        <button onClick={saveOnClick} className={styles.add}></button>
      )}
    </div>
  );
};

export default ItemCard;
