import React from 'react';
import styles from '../../styles/Salons.module.css'
import WhiteBtn from './../UI/WhiteBtn/WhiteBtn';

export default function Salons() {
  return (
    <section className={styles.salonsContainer}>
        <h5 className='titleH5Section colorWhite'>Не знаете, что выбрать?</h5>
        <h2 className='titleH2Section colorWhite'>Посетите наши салоны в Москве</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia cupiditate cum porro a error qui! Fuga dolore modi quo totam aperiam, ratione accusantium fugit et repellendus. Quia, esse magni?</p>
        <WhiteBtn>наши салоны</WhiteBtn>
    </section>
  )
}
