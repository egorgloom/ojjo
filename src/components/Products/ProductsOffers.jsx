import React from 'react'
import { useGetProductsQuery } from '../../features/apiSlice/apiSlice';
import Product from './Product';

export default function ProductsOffers() {
    const amount = 3;
    const {data} = useGetProductsQuery();
    const arr = Object.keys(data).map((key) => data[key])
  return !data ? (<section>Loading...</section>) : (
    <div className='flex-column flex-center'>
      <h5 className='titleH5Section'>Мы подготовили для вас кое-что еще</h5>
      <h2 className='titleH2Section'>Товары, которые могут Вам понравиться</h2>
      <div className='flex'>
      {data.slice(0,3).map((item) => <Product {...item} key={item.id}/>) }
      </div>
    </div>
  )
}
