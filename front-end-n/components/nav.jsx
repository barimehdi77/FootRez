import Head from 'next/head';
import Image from 'next/image';
import logoPic from '../public/1337-logo-cropped.png';
import styles from '../styles/nav.module.css';

function lightMode() {
	document.body.classList.toggle('lightmode');
}

function Nav() {
	return (
		<>
			<Head>
				<script
					src='https://kit.fontawesome.com/fa10758cd2.js'
					crossorigin='anonymous'
				></script>
			</Head>
			<div className={styles.navBar}>
				<Image src={logoPic} alt='1337 Logo' className={styles.logo} />
				<nav>
					<ul style={{ listStyle: 'none' }}>
						<li style={{ padding: '1rem 0' }}>
							<a href='#' className={styles.footrezLogo}>
								Foot<span style={{ color: 'var(--primary-blue)' }}>Rez</span>
							</a>
						</li>
					</ul>
				</nav>
				<i
					onClick={lightMode}
					id='mode-toggle'
					className={
						styles.darkModeIcon + ' ' + 'fa-solid fa-circle-half-stroke fa-3x'
					}
				></i>
			</div>
		</>
	);
}

export default Nav;
