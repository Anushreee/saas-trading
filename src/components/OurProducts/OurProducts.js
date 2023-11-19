import React from 'react';
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

const products = [
    {
        image: One,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Two,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Three,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Four,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Five,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Six,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Seven,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Eight,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Nine,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    },
    {
        image: Ten,
        alt:'',
        name:'Lorem Ipsum',
        description:'Lorem Ipsum Lorem Ipsum'
    }
]

const OurProducts = () => {
    return (
        <div className={styles.products}>
            <div className={styles.wrapper}>
              <h1>Our Products</h1>
              <ul className={styles.navList}>
                {products.map(product=>{
                    return <li>
                        <img src={product.image} alt={product.alt} />
                        <div className={styles.name}>{product.name}</div>
                        <div className={styles.description}>{product.description}</div>
                    </li>
                })}
              </ul>
            </div>
        </div>
        
    )
}

export default OurProducts;
