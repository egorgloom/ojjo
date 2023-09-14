import React from 'react';

import styles from '../../../styles/NoResult.module.css';

export default function Result({ title }) {
  return (
    <p className={styles.noResult}>
      {title}
    </p>
  )
}
