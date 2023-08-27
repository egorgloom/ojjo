import React from 'react';
import styles from '../../styles/Catalog.module.css'

export default function Catalog() {
  return (
    <div className={styles.catalogContainer}>
      <h2 className={styles.catalog}>Долго, дорого, богато!</h2>
      <button className={styles.btnCatalog}>каталог изделий</button>
    </div>
  )
}
