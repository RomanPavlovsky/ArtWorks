import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/img/BlackLogo.png";
import { Link } from "react-router-dom";

import userpic from "../../assets/img/Userpic.png";
import notification_icon from "../../assets/icons/Notification.svg";

const Header = () => {
  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <Link to={"/"} className={style.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <nav className={style.navbar}>
          <Link to="saved" style={{ textdecoration: "none" }}>
            <div className={style.home}></div>{" "}
          </Link>
          <Link to="*" style={{ textdecoration: "none" }}>
            <div className={style.chat}>
              <img
                className={style.notification}
                src={notification_icon}
                alt="notification"
              />
            </div>
          </Link>
          <Link to="*" style={{ textdecoration: "none" }}>
            <div className={style.settings}></div>
          </Link>
          <div className={style.user}>
            <img src={userpic} alt="user" />
          </div>
          <div className={style.lang}>
            <p>ENG</p>
            <div className={style.arrow}>
              <i></i>
            </div>
          </div>
        </nav>
      </div>
      <div className={style.block}></div>
    </header>
  );
};

export default Header;
