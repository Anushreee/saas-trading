import React from "react";
import styles from "./ContactNav.module.scss";
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa';

const ContactNav = () => {
  return (
    <div className={styles.contactNav}>
      <div className={styles.wrapper}>
        <div className={styles.contents}>
          <ul className={styles.navList}>
            <li><span className={styles.phone}><FaPhoneAlt /></span>61402768660</li>
            <li><span className={styles.envelope}><FaEnvelope /></span> saabtrading24@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
