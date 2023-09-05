import React from 'react';
import styles from '../../styles/Product.module.css'


export default function Product() {
    return (
        <div className={styles.containerProduct}>
            <img src="" alt="" className={styles.imageProduct} />
            <p className={styles.descriptionProduct}>Подвеска</p>
            <h4 className={styles.titleProduct}>Dolche and Gabana</h4>
            <button className={styles.priceBtn}>175 000$</button>
        </div>
    )
}