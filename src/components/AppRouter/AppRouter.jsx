import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import { ROUTES } from './../../utils/routes';
import Products from './../Products/Products';

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTES.PRODUCTS} element={<Products />} />

            </Routes>
        </>
    )
}
