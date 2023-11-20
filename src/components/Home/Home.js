import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <h1>Saas Trading Pty Ltd</h1>
        <div className={styles.contentWrapper}>
          <p>
            At SAAB Trading Enterprises Pty Limited, we are committed to
            delivering premium products to the Australian market and beyond. We
            are an import trading firm dedicated to sourcing top-tier products
            from Nepal and around the globe, ensuring the finest quality,
            competitive pricing, and exceptional customer service.
          </p>
          <p>
            At SAAB Trading Enterprises Pty Limited, we are passionate about
            connecting you with the finest products from Nepal and beyond. As a
            leading import trading firm, we are committed to providing our
            customers with exceptional quality, competitive pricing, and
            unwavering customer service.
          </p>
          <p>
            SAAB Trading Enterprises Pty Limited is a dynamic import-export
            company committed to delivering premium products to the Australian
            market and beyond. Our initial focus lies in importing exquisite
            black cardamom from the scenic landscapes of Nepal. As we embark on
            this exciting journey, we envision becoming a global player,
            expanding our product portfolio to cater to diverse markets
            worldwide.
          </p>
          <p>
            we strive to connect businesses and consumers with the finest
            products from around the world, starting with Nepal's prized black
            cardamom. We are committed to providing our clients with an
            unparalleled experience, encompassing top-tier products, competitive
            pricing, and exceptional customer service.
          </p>
          <p>
            At the heart of our mission lies a deep-rooted passion for sourcing
            and supplying high-quality products that meet the diverse needs of
            our customers. We carefully select our suppliers, ensuring that they
            adhere to the highest standards of production and ethical practices.
            Our commitment to quality extends beyond product sourcing; we
            meticulously monitor every step of the supply chain, ensuring that
            our products reach you in pristine condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
