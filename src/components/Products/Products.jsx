import React from 'react';

import AboutProducts from '../AboutProducts/AboutProducts'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
import Mailing from '../Mailing/Mailing'
import MySelect from '../Select/MySelect'
import Product from './Product'


export default function Products() {

  return (
    <div >
        <Header />
        <section className='flex flex-center'>
          <MySelect
          defaultValue='Цена'
          options={[
            { value: 'up', name: 'По возрастанию' },
            { value: 'down', name: 'По убыванию' }

          ]}/>
        </section>
        <section className='containerProducts'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        </section>
        <AboutProducts />
      <Mailing />
      <Footer />
    </div>
    
  )
}
