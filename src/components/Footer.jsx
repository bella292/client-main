import React from "react";
import styles from "../public/css/Footer.module.css";
import footerlogo from "../public/footerlogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={footerlogo} alt="footerlogo" />
      </div>
    </footer>
  );
};

export default Footer;
