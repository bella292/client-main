import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../public/css/Introduce.module.css";
import ment01 from "../public/ment01.png";
import ment01_01 from "../public/ment01_01.png";
import ment01_02_01 from "../public/ment01_02_01.png";
import ment01_02_02 from "../public/ment01_02_02.png";
import ment01_02_03 from "../public/ment01_02_03.png";
import ment02 from "../public/ment02.png";
import ment03 from "../public/ment03.png";

const Introduce = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={ment01} alt="ment01" />
        <div class="orangebox-1">
          <div class="box-1">
            <img src={ment01_01} alt="ment01_01" />
          </div>
          <div class="box-2">
            <img src={ment01_02_01} alt="ment01_02_01" />
            <img src={ment01_02_02} alt="ment01_02_02" />
            <img src={ment01_02_03} alt="ment01_02_03" />
          </div>
        </div>
        <img src={ment02} alt="ment02" />
        <img src={ment03} alt="ment03" />
      </div>
      <Footer />
    </div>
  );
};

export default Introduce;
