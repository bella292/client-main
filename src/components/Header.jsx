import React from "react";
import { Link } from "react-router-dom";
import styles from "../public/css/Header.module.css";
import mainlogo from "../public/mainlogo.png";
import promiseicon from "../public/promiseicon.png";
import gameicon from "../public/gameicon.png";
import homeicon from "../public/homeicon.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={styles.logo}>
          <img src={mainlogo} alt="mainlogo" />
        </Link>
        <Link to="/introduce">Introduce</Link>
        <Link to="/promise_member_information">약속 멤버 정보</Link>
        <Link to="/my_promise">나의 약속</Link>
        <Link to="/login">로그인</Link>
        <Link to="/join">회원가입</Link>
      </nav>
      <div className={styles.buttons}>
        <Link to="/" className={styles.logo}>
          <img src={promiseicon} alt="promiseicon" />
        </Link>
        <Link to="/" className={styles.logo}>
          <img src={gameicon} alt="gameicon" />
        </Link>
        <Link to="/" className={styles.logo}>
          <img src={homeicon} alt="homeicon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
