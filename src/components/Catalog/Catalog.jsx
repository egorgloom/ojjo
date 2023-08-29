import React from 'react';
import styles from '../../styles/Catalog.module.css'
import BlackBtn from '../UI/BlackBtn';

export default function Catalog() {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.catalog}>Долго, дорого, богато!</h1>
      <BlackBtn>каталог изделий</BlackBtn>
    </div>
  )
}
