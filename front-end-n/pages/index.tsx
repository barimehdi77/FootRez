import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import Day from '../components/day';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<section className='main'>
				<div className='container'>
					<h1>reserve an available time slot</h1>
					<div className='underline'></div>
					<div className='dashboard'>
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
