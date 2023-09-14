import React from 'react';

import MySelect from './../Select/MySelect';

export default function Filters() {
  return (

    <section className='wrapperProducts'>
      <MySelect
        defaultValue='Цена'
        options={[
          { value: 'up', name: 'По возрастанию' },
          { value: 'down', name: 'По убыванию' }
        ]} />
    </section>

  )
}
