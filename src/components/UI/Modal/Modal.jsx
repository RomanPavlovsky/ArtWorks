import React from "react";

import styles from "./modal.module.scss";
import cn from "classnames";

import { useSelector, useDispatch } from "react-redux";
import { setCloseModal } from "../../../Redux/Slices/modalSlice";

const Modal = () => {
  const { modalActive, openItemModal, openSettingModal, openUserModal } =
    useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(setCloseModal());

  console.log(modalActive);
  console.log(openUserModal);
  return (
    <div
      onClick={closeModal}
      className={
        modalActive === true ? cn(styles.modal, styles.active) : styles.modal
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          modalActive === true
            ? cn(styles.content, styles.active)
            : styles.content
        }
      >
        {openUserModal && <div>usercomponent</div>}
        {openSettingModal && <div>settingcomponent</div>}
        {openItemModal && <div>itemcomponent</div>}
      </div>
    </div>
  );
};

export default Modal;
