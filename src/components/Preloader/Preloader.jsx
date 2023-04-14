import React from 'react'
import styles from './preloader.module.css'
import loader from '../../images/loader.svg'

export function Preloader() {
	return <img src={loader} alt='loader' className={styles.user__img} />
}
