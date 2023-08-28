import React from 'react';
import styles from '../../styles/SocialLinks.module.css';

import img1 from '../../images/social1.svg';
import img2 from '../../images/social2.svg';
import img3 from '../../images/social3.svg';
import img4 from '../../images/social4.svg';
import img5 from '../../images/social5.svg';
import img6 from '../../images/social6.svg';

export default function SocialLinks() {
    return (
        <section className={styles.socialLinksContainer}>
            <h5 className='titleH5Section'>#ojjo_jewerly</h5>
            <h2 className='titleH2Section'>Мы в социальных сетях</h2>
            <div className={styles.preview}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </section>
    )
}
