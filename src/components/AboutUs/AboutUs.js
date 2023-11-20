import React from "react";
import styles from "./AboutUs.module.scss";
import Logo from "../../assets/images/6.jpg";

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <h1>About us</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <p>
              SAAB Trading Enterprises Pty Limited: At SAAB Trading Enterprises
              Pty Limited, we are committed to delivering premium products to
              the Australian market and beyond. We are an import trading firm
              dedicated to sourcing top-tier products from Nepal and around the
              globe, ensuring the finest quality, competitive pricing, and
              exceptional customer service.
            </p>
            <p>
              At SAAB Trading Enterprises Pty Limited, we are passionate about
              connecting you with the finest products from Nepal and beyond. As
              a leading import trading firm, we are committed to providing our
              customers with exceptional quality, competitive pricing, and
              unwavering customer service. SAAB Trading Enterprises Pty Limited
              is a dynamic import-export company committed to delivering premium
              products to the Australian market and beyond. Our initial focus
            </p>
            <p>
              SAAB Trading Enterprises Pty Limited is a dynamic import-export
              company committed to delivering premium products to the Australian
              market and beyond. Our initial focus lies in importing exquisite
              black cardamom from the scenic landscapes of Nepal. As we embark
              on this exciting journey, we envision becoming a global player,
              expanding our product portfolio to cater to diverse markets
              worldwide.
            </p>
            <p>
              we strive to connect businesses and consumers with the finest
              products from around the world, starting with Nepal's prized black
              cardamom. We are committed to providing our clients with an
              unparalleled experience, encompassing top-tier products,
              competitive pricing, and exceptional customer service.
            </p>
            <p>
              At the heart of our mission lies a deep-rooted passion for
              sourcing and supplying high-quality products that meet the diverse
              needs of our customers. We carefully select our suppliers,
              ensuring that they adhere to the highest standards of production
              and ethical practices. Our commitment to quality extends beyond
              product sourcing; we meticulously monitor every step of the supply
              chain, ensuring that our products reach you in pristine condition.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our primary mission is to serve as a reliable bridge between Nepal
              and Australia, fostering mutually beneficial trade partnerships
              that promote economic growth and cultural exchange. We believe in
              empowering local communities in Nepal through sustainable sourcing
              practices and fair trade agreements.
            </p>
            <p>
              Our Commitment to Quality At SAAB Trading Enterprises Pty Limited,
              quality is at the heart of everything we do. We meticulously
              source our products from reputable suppliers, adhering to
              stringent quality control measures at every stage of the supply
              chain. This unwavering commitment to quality ensures that our
              customers receive only the finest products that meet their
              expectations. Our Competitive Pricing{" "}
            </p>
            <p>
              We understand the importance of value for money. Our competitive
              pricing reflects our commitment to providing our customers with
              access to premium products without compromising on quality. We
              strive to maintain a balance between affordability and excellence,
              making our offerings accessible to a wider range of consumers.
            </p>

            <h3> Our Exceptional Customer Service</h3>
            <p>
              We believe in building strong relationships with our customers,
              understanding their needs and exceeding their expectations. Our
              team of dedicated professionals is committed to providing
              exceptional customer service, ensuring a seamless and positive
              experience from inquiry to delivery.
            </p>
            <h3>Partnering with SAAB Trading Enterprises Pty Limited</h3>
            <p>
              By partnering with SAAB Trading Enterprises Pty Limited, you gain
              access to a world of possibilities. We offer a diverse range of
              products, competitive pricing, and exceptional customer service,
              all backed by our unwavering commitment to quality and
              sustainability. We invite you to embark on this journey with us as
              we bridge the gap between Nepal and Australia, bringing the finest
              products to your doorstep.
            </p>
            <p>
              Our company thrives on building alliances and has expertise in
              procurement, ensuring that we offer our customers the best prices
              all the time. We have established strong relationships with
              farmers, manufacturers, and distributors across Southern Africa,
              enabling us to offer a wide range of products that meet our
              customers’ specifications and quality standards.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={Logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
