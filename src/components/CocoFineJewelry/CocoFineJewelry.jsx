import React from 'react';
import styles from '../../styles/CocoFineJewelry.module.css'
import BRAND from '../../images/CocoFineJewelry.svg'


export default function CocoFineJewelry() {
  return (
    <div className={styles.brandsContainer}>
      <hr className={styles.line}/>
      <div className={styles.brands}>
      <img src={BRAND} alt="brand" />
      <img src={BRAND} alt="brand" />
      <img src={BRAND} alt="brand" />
      <img src={BRAND} alt="brand" />
      <img src={BRAND} alt="brand" />
      <img src={BRAND} alt="brand" />
      </div>
      
    </div>
  )
}
