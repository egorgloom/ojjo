import React from 'react';

import img1 from '../../images/article1.svg';
import img2 from '../../images/article2.svg';
import img3 from '../../images/article3.svg';

import styles from '../../styles/UsefulArticles.module.css'
import BlackBtn from '../UI/BlackBtn/BlackBtn';


export default function UsefulArticles() {
  return (
    <section className={styles.articlesContainer}>
      <h5 className='titleH5Section'>Полезные статьи</h5>
      <h2 className='titleH2Section'>Лучшие советы по подбору дорогих подарков</h2>
      <div className={styles.articles}>
        <div className={styles.article}>
          <img src={img1} alt='img' className={styles.imgArticle} />
          <span className={styles.textArticle}>Как выбрать часы для своей будущей жены</span>
        </div>
        <div className={styles.article}>
          <img src={img2} alt='img' className={styles.imgArticle} />
          <span className={styles.textArticle}>Запонки для мужа: 7 ключевых правил покупки аксессуара</span>
        </div>
        <div className={styles.article}>
          <img src={img3} alt='img' className={styles.imgArticle} />
          <span className={styles.textArticle}>Как выбрать обручальные кольца молодоженам</span>
        </div>
      </div>
      <BlackBtn style={{ marginTop: '50px' }}>читать наш блог</BlackBtn>
    </section>
  )
}
