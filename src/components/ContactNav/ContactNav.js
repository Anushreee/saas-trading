import React, { useState } from "react";
import styles from "./ContactNav.module.scss";
import { FaPhoneAlt, FaEnvelope, FaHamburger } from "react-icons/fa";
import useDeviceType from "../../hooks/useDeviceType";
import { DEVICE_TYPE } from "../../utils/constants";

const ContactNav = ({ setDisplayTopNav }) => {
  const deviceType = useDeviceType();
  return (
    <div className={styles.contactNav}>
      <div className={styles.wrapper}>
        {deviceType === DEVICE_TYPE.MOBILE && (
          <div className={styles.logoNav}>
            <span>logo</span>
            <span
              className={styles.navButton}
              onClick={() => setDisplayTopNav(true)}
            >
              <FaHamburger />
            </span>
          </div>
        )}
        <div className={styles.contents}>
          <ul className={styles.navList}>
            <li>
              <span className={styles.phone}>
                <FaPhoneAlt />
              </span>
              61402768660
            </li>
            <li>
              <span className={styles.envelope}>
                <FaEnvelope />
              </span>{" "}
              saabtrading24@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
