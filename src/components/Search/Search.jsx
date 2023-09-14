import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../features/apiSlice/apiSlice';

import styles from '../../styles/Search.module.css';

import Result from './../UI/Result/Result';


export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  
  const { data = [] } = useGetProductsQuery();

  const filterData = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <form className={styles.searchForm} >
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.searchInput}
        type="text"
        placeholder='Поиск' />
      <span >
        {searchValue && <div className={styles.searchList}>
          {
            filterData.length ?
              filterData.map(({ image, title, id }) =>
                <Link to={`/product/${id}`}
                  className={styles.item}
                  key={id}
                  onClick={() => setSearchValue('')}
                >
                  <img src={image} alt={title} />
                  <h5>{title}</h5>
                </Link>
              ) :
              <Result title='No Result' />
          }
        </div>}
      </span>
    </form>
  )
}
