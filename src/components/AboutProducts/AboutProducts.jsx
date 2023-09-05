import React from 'react';

import styles from '../../styles/AboutProducts.module.css';

import IMG_DELIVERY from '../../images/delivery.svg'
import IMG_LIST from '../../images/list.svg'
import IMG_JEWELRY from '../../images/jewelry.svg'
import IMG_DESIGN from '../../images/design.svg'

export default function AboutProducts() {
    return (
        <div className={styles.containerAboutUs}>
            <div className={styles.seoList}>
                <p className={styles.aboutUs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui non nemo eaque sed! Nostrum ullam, molestiae dolorem quaerat rem soluta dolor impedit cumque tempora, deserunt voluptatibus? Nisi, explicabo possimus.</p>
            </div>
            <div className={styles.iconList}>
                <figure className={styles.item}>
                    <img src={IMG_DELIVERY} alt="Бесплатная доставка" className={styles.imgIcon} />
                    <figcaption className={styles.titleImgIcon}>Бесплатная доставка</figcaption>
                </figure>
                <figure className={styles.item}>
                    <img src={IMG_LIST} alt="Индивидуальный дизайн" className={styles.imgIcon} />
                    <figcaption className={styles.titleImgIcon}>Индивидуальный дизайн</figcaption>
                </figure>
                <figure className={styles.item}>
                    <img src={IMG_DESIGN} alt="Бесплатная примерка" className={styles.imgIcon} />
                    <figcaption className={styles.titleImgIcon}>Бесплатная примерка</figcaption>
                </figure>
                <figure className={styles.item}>
                    <img src={IMG_JEWELRY} alt="Личный подход" className={styles.imgIcon} />
                    <figcaption className={styles.titleImgIcon}>Личный подход</figcaption>
                </figure>
            </div>
        </div>

    )
}
