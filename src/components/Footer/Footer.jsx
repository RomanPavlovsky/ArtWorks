import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/img/WhiteLogo.png";
import facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";
import whatsapp from "../../assets/icons/WhatsApp.svg";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <p className={styles.p1}>Contact offer</p>
          <p className={styles.p2}>Card payment rules</p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.domen}>imagine.com</div>
          <div className={styles.email}>info@imagine.com</div>
          <div className={styles.phone}>+44(0) 35 2953 2953</div>
          <div className={styles.socials}>
            <a href="##" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="##" target="_blank">
              <img src={instagram} alt="istagram" />
            </a>
            <a href="##" target="_blank">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
          <div className={styles.rights}>
            © IMAGINE 2021. All rights Reserved
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
