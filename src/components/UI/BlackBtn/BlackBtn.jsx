import React from 'react';

import styles from './BlackBtn.module.css';

export default function BlackBtn({ children, ...props }) {
  return (
    <>
      <button className={styles.catalogBtn}{...props}>{children}</button>
    </>
  )
}
