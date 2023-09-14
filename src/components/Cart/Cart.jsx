import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { FaPlus, FaMinus, FaRegWindowClose } from 'react-icons/fa';

import styles from '../../styles/Cart.module.css'

import { sumPrice } from '../../utils/common';
import { addToCart, removeToCart } from '../../features/cartSlice/cartSlice';

import BlackBtn from './../UI/BlackBtn/BlackBtn';


export default function Cart() {

    const { cart } = useSelector(({ cart }) => cart);

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeToCart(id))
    }

    const changeQuantity = (item, quantity) => {
        dispatch(addToCart({ ...item, quantity }))
    }
    return (
        <div className={styles.cartContainer}>
            <section className={styles.cart}>
                <h2 className={styles.title}>Your cart:</h2>
                <hr />
                <div className={styles.list}>
                    {cart.map((item) => {
                        const { image, title, category, price, id, quantity } = item;
                        return (
                            <>
                                <div className={styles.item} key={id}>
                                    <img src={image} alt={title} className={styles.image} />
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>{title}</h3>
                                        <div className={styles.category}>{category}</div>
                                    </div>
                                    <div className={styles.price}>{Math.ceil(price * 10)}$</div>
                                    <div className={styles.quantity}>
                                        <FaMinus
                                            className={styles.minus}
                                            onClick={() => changeQuantity(item, Math.max(1, quantity - 1))} />
                                        <span>{quantity}</span>
                                        <FaPlus
                                            className={styles.plus}
                                            onClick={() => changeQuantity(item, Math.max(1, quantity + 1))} />
                                    </div>
                                    <div className={styles.total}>{Math.ceil((price * 10) * quantity)}$</div>
                                    <FaRegWindowClose
                                        className={styles.close}
                                        onClick={() => handleRemove(id)} />
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </div>
                <div className={styles.actions}>
                    <div className={styles.total}>
                        TOTAL PRICE:{" "}
                        <span>
                            {sumPrice(cart.map(({ price, quantity }) => Math.ceil((price * quantity) * 10)))}$
                        </span>
                    </div>
                    <BlackBtn>Proceed to checkout</BlackBtn>
                </div>
            </section>
        </div>
    )
}
