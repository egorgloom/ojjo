import React from 'react';
import styles from './WhiteBtn.module.css'

export default function WhiteBtn({children, ...props}) {
  return (
    <>
      <button className={styles.whiteBtn} {...props}>{children}</button>
    </>
  )
}
