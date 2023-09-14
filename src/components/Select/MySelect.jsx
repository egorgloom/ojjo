import React from 'react';

import styles from '../../styles/MySelect.module.css';

export default function MySelect({ defaultValue, options }) {
  return (
    <select className={styles.select}>
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
  )
}
