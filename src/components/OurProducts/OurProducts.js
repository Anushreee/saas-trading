import React from "react";
import styles from "./OurProducts.module.scss";
import One from "../../assets/images/1.jpg";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.jpg";
import Four from "../../assets/images/4.jpg";
import Five from "../../assets/images/5.jpg";
import Six from "../../assets/images/6.jpg";
import Seven from "../../assets/images/7.jpg";
import Eight from "../../assets/images/8.png";
import Nine from "../../assets/images/9.png";
import Ten from "../../assets/images/10.png";
import Cardamom from "../../assets/cardamom.jpeg";

const products = [
  {
    image: One,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Two,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Three,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Four,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Five,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Six,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Seven,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Eight,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Nine,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    image: Ten,
    alt: "",
    name: "Lorem Ipsum",
    description: "Lorem Ipsum Lorem Ipsum",
  },
];

const OurProducts = () => {
  return (
    <div className={styles.products}>
      <div className={styles.wrapper}>
        <h1>Our Products</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2>Introducing 0ur Flagship Product: Nepalese Black Cardamom</h2>
            <p>
              We are proud to introduce our flagship product, the exquisite
              black cardamom, also known as the 'black gold' of spices.
              Meticulously sourced from the foothills of the Himalayas in Nepal,
              each batch is handpicked to ensure unparalleled freshness and
              exceptional quality.
            </p>
            <h3>Nepalese Black Cardamom</h3>
            <p>
              Black cardamom, known as 'alaichi' in Nepali, is a prized spice
              native to the foothills of the Himalayas, particularly in Nepal.
              Its cultivation dates back centuries, with its unique aroma and
              flavor captivating culinary enthusiasts worldwide.
            </p>
            <p>
              This prized spice flourishes in the Himalayan region's ideal
              climatic conditions. The cardamom plants thrive in this cool,
              humid climate, yielding pods that are larger and more flavorful
              than their smaller counterparts. Its cultivation involves
              meticulous care, with farmers nurturing the plant through organic
              methods, harnessing the fertile soil and pure mountain air.
            </p>
            <p>
              What sets Nepalese black cardamom apart is its earthy, smoky
              notes, distinguishing it from its green counterpart.
            </p>
            <h3>Other Popular Uses for Black Cardamom</h3>
            <p>
              Today, black cardamom remains a prized spice, sought after by
              chefs and home cooks alike. Its unique aroma and flavor add depth
              and complexity to a wide range of dishes, making it a culinary
              treasure worth discovering.
            </p>
            <p>
              Black cardamom's versatility extends beyond culinary applications.
              This 'black gold' of spices finds applications in various
              industries such as pharmaceuticals and traditional medicine, where
              it is believed to possess anti-inflammatory, antibacterial, and
              digestive properties. Its smoky, earthy scent and calming,
              relaxing properties make it a popular choice for a variety of
              cosmetics and fragrances, including perfumes, soaps, and lotions.
              In the textile industry, black cardamom serves as a natural dye.
              The liquor industry utilizes it to impart unique flavor and aroma
              to beverages. Additionally, its scent and purifying and cleansing
              properties make it a popular choice for incense and smudging
              blends.
            </p>
            <p>
              Beyond these specific uses, black cardamom finds applications as a
              flavoring agent in a variety of other products, such as chewing
              gum, toothpaste, and air fresheners. Its unique flavor and aroma
              make it a versatile ingredient that is widely appreciated.
            </p>

            <h3>Our Commitment to Excellence</h3>
            <p>
              As we continue to expand our reach, we remain committed to
              broadening our product line, meticulously curating a diverse
              collection of premium-quality items from across the globe. Our
              passion for quality and innovation drives us to deliver
              exceptional products that meet the discerning tastes of our valued
              customers.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={Cardamom} />
          </div>
        </div>
        <ul className={styles.navList}>
          {products.map((product) => {
            return (
              <li>
                <img src={product.image} alt={product.alt} />
                <div className={styles.name}>{product.name}</div>
                <div className={styles.description}>{product.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurProducts;
