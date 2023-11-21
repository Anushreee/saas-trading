import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.scss";
import Logo from "../../assets/logo1.png";
import useDeviceType from "../../hooks/useDeviceType";
import { DEVICE_TYPE } from "../../utils/constants";

const TopNav = ({ setDisplayTopNav = () => {} }) => {
  const deviceType = useDeviceType();
  return (
    <div className={styles.topNav}>
      <div className={styles.wrapper}>
        <div className={styles.contents}>
          <div className={styles.logo}>
            <img src={Logo} alt="SAAS Logo" />
          </div>
          {deviceType === DEVICE_TYPE.MOBILE && (
            <button
              className={styles.closeButton}
              onClick={() => {
                setDisplayTopNav(false);
              }}
            >
              &times;
            </button>
          )}

          <ul
            className={styles.navList}
            onClick={() => {
              setDisplayTopNav(false);
            }}
          >
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
