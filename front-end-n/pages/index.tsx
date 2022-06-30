import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/index.module.css'
import Day from '../components/Day';

const Home: NextPage = () => {
	return (
		<>
			<section className={styles.main}>
				<div className={styles.container}>
					<h1 className={styles.title}>reserve an available time slot</h1>
					<div className={styles.underline}></div>
					<div className={styles.dashboard}>
						<Day day='tuesday' />
						<Day day='wednesday' />
						<Day day='friday' />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
