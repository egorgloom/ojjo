import React from 'react'

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '../../features/apiSlice/apiSlice';
import { addToCart } from '../../features/cartSlice/cartSlice';

import styles from '../../styles/SingleProduct.module.css';

import AboutProducts from '../AboutProducts/AboutProducts';
import BlackBtn from './../UI/BlackBtn/BlackBtn';
import ProductsOffers from './ProductsOffers';



export default function SingleProduct() {
    const { id } = useParams()
    const { data } = useGetProductQuery({ id })

    const dispatch = useDispatch()

    const addItem = (data) => {
        dispatch(addToCart(data))

    }
    return !data ? (<section>Loading...</section>) : (
        <>
            <div className={styles.routes}> Главная Категории Товар </div>
            <section className={styles.flexGap}>
                <div className={styles.containerSingleProduct}>
                    <img src={data.image} alt="" className={styles.imgSingleProduct} />
                    <div className={styles.descriptionContainer}>
                        <h2 className={styles.title}>Dolce &amp; Gabbara</h2>
                        <div className={styles.infoProduct}>
                            <p>Категория: {data.category}</p>
                            <p>Бренд: Dolce &amp; Gabbara</p>
                        </div>
                        <hr />
                        <p className={styles.descriptionProduct}>{data.description}</p>
                        <span className={styles.price}>{data.price * 10}$</span>
                        <div>
                            <BlackBtn onClick={() => addItem(data)}>Добавить в корзину</BlackBtn>
                        </div>
                    </div>
                </div>
                <AboutProducts />
                <ProductsOffers />
            </section>
        </>
    )
}
