import React from 'react';

import styles from '../../styles/ProductCatalog.module.css';

import img1 from '../../images/1.svg';
import img2 from '../../images/2.svg';
import img3 from '../../images/3.svg';
import img4 from '../../images/4.svg';
import img5 from '../../images/5.svg';
import img6 from '../../images/6.svg';

export default function ProductCatalog() {
    return (
        <section className={styles.productContainer}>
            <h5 className='titleH5Section'>К мероприятиям</h5>
            <h2 className='titleH2Section'>Настоящая красота здесь!</h2>
            <div className={styles.btnBlock}>
                <button className={styles.btnCollection}>Свадьба</button>
                <button className={styles.btnCollection}>Мужу</button>
                <button className={styles.btnCollection}>Жене</button>
                <button className={styles.btnCollection}>Партнёру</button>
                <button className={styles.btnCollection}>Коллекции</button>
                <button className={styles.btnCollection}>Редкость</button>
            </div>
            <div className={styles.blockProducts}>
                <div className={styles.product}>
                    <img src={img1} alt="" className={styles.productImg} />
                    <span className={styles.nameCollection}>Кольца</span>
                </div>
                <div className={styles.product}>
                    <img src={img2} alt="" className={styles.product} />
                    <span className={styles.nameCollection}>Серьги</span>
                </div>
                <div className={styles.product}>
                    <img src={img3} alt="" className={styles.product} />
                    <span className={styles.nameCollection}>Подвески</span>
                </div>
                <div className={styles.product}>
                    <img src={img4} alt="" className={styles.product} />
                    <span className={styles.nameCollection}>Запонки</span>
                </div>
                <div className={styles.product}>
                    <img src={img5} alt="" className={styles.product} />
                    <span className={styles.nameCollection}>Браслеты</span>
                </div>
                <div className={styles.product}>
                    <img src={img6} alt="" className={styles.product} />
                    <span className={styles.nameCollection}>Часы</span>
                </div>
            </div>
        </section>
    )
}
