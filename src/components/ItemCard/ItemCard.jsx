import React from "react";
import styles from "./itemcard.module.scss";
import { deleteItems } from "../../Redux/Slices/itemsSlice";
import { fetchItemModal } from "../../Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ItemCard = ({ id, title, image_card, author, author_image }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const removeOnClick = () => dispatch(deleteItems(id));
  const saveOnClick = () => dispatch(deleteItems(id));
  const openItemModal = () => dispatch(fetchItemModal(id));
  return (
    <div className={styles.container}>
      <div onClick={openItemModal} className={styles.image}>
        <img src={image_card} alt="img" />
      </div>
      <div className={styles.info}>
        <div className={styles.author_photo}>
          <img src={author_image} alt="user" />
        </div>
        <div className={styles.discription}>
          <div className={styles.author_name}>
            <p>{author}</p>
          </div>
          <div className={styles.artwork_title}>
            <p>{title}</p>
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
