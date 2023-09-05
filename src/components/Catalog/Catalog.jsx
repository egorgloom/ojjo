import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Catalog.module.css'
import BlackBtn from '../UI/BlackBtn/BlackBtn';
import { ROUTES } from './../../utils/routes';

export default function Catalog() {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.catalog}>Долго, дорого, богато!</h1>
      <Link to={ROUTES.PRODUCTS}>

      <BlackBtn>каталог изделий</BlackBtn>
      </Link>
    </div>
  )
}
