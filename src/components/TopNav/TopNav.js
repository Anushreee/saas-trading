import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.scss";
import Logo from "../../assets/logo1.png";

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.wrapper}>
        <div className={styles.contents}>
          <div className={styles.logo}>
            <img src={Logo} alt="SAAS Logo"/>
          </div>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
