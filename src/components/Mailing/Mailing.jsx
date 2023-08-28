import React from 'react';
import styles from '../../styles/Mailing.module.css'

export default function Mailing() {
  return (
    <section className={styles.mailingContainer}>
              <h5 className='titleH5Section colorWhite'>Полезные советы и персональный предложения</h5>
        <h2 className='titleH2Section colorWhite'>Эксклюзивная рассылка</h2>
        <div className={styles.mailing}>
            <ul className={styles.listOptions}>
                <li>Личный менеджер</li>
                <li>Доставка и оформление</li>
                <li>Индивидуальный дизайн</li>
            </ul>
            <form className={styles.formMailing}>
                <input type="text" placeholder='Ваш E-mail' className={styles.mailingInput}/>
                <button className={styles.btnSend} >отправить</button>
                </form>
        </div>
    </section>
  )
}
