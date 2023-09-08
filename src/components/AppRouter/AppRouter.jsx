import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import SingleProduct from '../Products/SingleProduct';
import { ROUTES } from './../../utils/routes';
import Products from './../Products/Products';
import Cart from './../Cart/Cart';

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTES.PRODUCTS} element={<Products />} />
                <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
                <Route path={ROUTES.CART} element={<Cart />} />
            </Routes>
        </>
    )
}
