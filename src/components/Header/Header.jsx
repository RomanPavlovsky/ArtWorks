import React from "react";
import styles from "./header.module.scss";
import logo from "../../assets/img/BlackLogo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import {
  setOpenUserModal,
  setOpenSettingModal,
} from "../../Redux/Slices/modalSlice";

import userpic from "../../assets/img/Userpic.png";
import notification_icon from "../../assets/icons/Notification.svg";

const Header = () => {
  const dispatch = useDispatch();
  const openUserModal = () => dispatch(setOpenUserModal());
  const openSettingModal = () => dispatch(setOpenSettingModal());
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to={"/"} className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <nav className={styles.navbar}>
          <Link className={styles.home} data-tip="Main page" to="saved"></Link>
          <Link className={styles.chat} data-tip="Messages" to="*">
            <img
              className={styles.notification}
              src={notification_icon}
              alt="notification"
            />
          </Link>
          <div
            data-tip="Settings"
            onClick={openSettingModal}
            className={styles.settings}
          ></div>
          <div onClick={openUserModal} className={styles.user}>
            <img src={userpic} alt="user" />
          </div>
          <div className={styles.lang}>
            <p>ENG</p>
            <div className={styles.arrow}>
              <i></i>
            </div>
          </div>
        </nav>
        <ReactTooltip place="bottom" type="dark" effect="float" />
      </div>
      <div className={styles.block}></div>
    </header>
  );
};

export default Header;
