import React from 'react';
import styles from '../../styles/Catalog.module.css'

export default function Catalog() {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.catalog}>Долго, дорого, богато!</h1>
      <button className={styles.btnCatalog}>каталог изделий</button>
    </div>
  )
}
