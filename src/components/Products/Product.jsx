import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Product.module.css'


export default function Product({ ...item }) {
    const { image, price, title, id } = item;
    return (
        <>
            <Link to={`/product/${id}`}>
                <div className={styles.containerProduct}>
                    <img src={image} alt={title} className={styles.imageProduct} />
                    {/* <p className={styles.descriptionProduct}>Подвеска</p> */}
                    <h4 className={styles.titleProduct}>{title}</h4>
                    <button className={styles.priceBtn}>{price * 10}$</button>
                </div>
            </Link>
        </>
    )
}