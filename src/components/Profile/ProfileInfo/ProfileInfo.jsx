import React from 'react'
import styles from './ProfileInfo.module.css'
import banner from '../../../images/banner.jpeg'
import ava from '../../../images/ava.jpeg'
import { Preloader } from '../../Preloader/Preloader'
import ProfileStatus from './ProfileStatus/ProfileStatus'

export default function ProfileInfo(props) {
	if (!props.profile) {
		return <Preloader />
	}
	return <>
			<div>
				<img src={banner} alt='banner' className={styles.banner__img} />
			</div>
			<div className={styles.me}>
				<div className={styles.me__ava}>
					{props.profile.photos.large ? (
						<img src={props.profile.photos.large} alt='ava' className={styles.me__avaImg} />
					) : (
						<img src={ava} alt='ava' className={styles.me__avaImg} />
					)}
				</div>
				<div className={styles.me__info}>
					<h3 className={styles.me__name}>{props.profile.fullName}</h3>

					<p className={styles.me__text}>Date of Birth: 30 october</p>
					<p className={styles.me__text}>City: Minsk</p>
					<p className={styles.me__text}>City: Minsk Education: BNTU '21</p>
					<p className={styles.me__text}>
						Web Site:
						<a href='https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BE%D1%81%D0%B8%D0%BF%D1%87%D0%B8%D0%BA-729784216/'>
							https://www.linkedin.com/
						</a>
					</p>
				</div>
			</div>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
		</>
}
