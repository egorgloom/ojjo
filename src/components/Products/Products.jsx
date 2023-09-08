import React from 'react';
import { useGetProductsQuery } from '../../features/apiSlice/apiSlice';

import AboutProducts from '../AboutProducts/AboutProducts';
import Filters from '../Filters/Filters';

import Product from './Product';


export default function Products() {

  const { data } = useGetProductsQuery()


  return (
    <>
      <Filters />
      <div className='wrapperProduct'>
        <section className='containerProducts'>
          {!data ? (<div>Not Found...</div>) : (
            <>
              {data.map((item) => <Product {...item} key={item.id} />)}
            </>
          )}
        </section>
        <AboutProducts />
      </div>

    </>

  )
}
