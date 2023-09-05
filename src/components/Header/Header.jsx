import React from 'react';
import styles from '../../styles/Header.module.css';

import LOGO from '../../images/ojjo.svg'

import { Link, useLocation } from 'react-router-dom'

import { FaRegUser, FaShoppingCart, FaSearch } from 'react-icons/fa';


export default function Header() {
    return (
        <div className={styles.header} style={{background: useLocation().pathname === "/" ? "" : "#333"}}>
            <div className={styles.headerContainer}>
            <nav>
                <ul className={styles.nav}>
                    <Link to={'/'}><li>Контрагентам</li></Link>
                    <Link to={'/'}><li>Дизайнерам</li></Link>
                    <Link to={'/'}><li>Вакансии</li></Link>
                </ul>
            </nav>
            <Link to={'/'}><img src={LOGO} alt={LOGO} className={styles.logo} /></Link>
            <div className={styles.userPanel}>
                <div>
                    <button className={styles.faSearch}><FaSearch /></button>
                    <input type="text" placeholder='Поиск' className={styles.search} />
                </div>
                <div>
                    <button className={styles.userBtn}>Вход</button>
                    <span className={styles.userBtn}>/</span>
                    <button className={styles.userBtn}>Регистрация</button>
                </div>
                <div className={styles.cartUser}>
                    <FaRegUser />
                    <FaShoppingCart />
                </div>
            </div>
            </div>

        </div>
    )
}
