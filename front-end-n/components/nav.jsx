import Head from 'next/head';
import Image from 'next/image';
import logoPic from '../public/1337-logo-cropped.png';

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
			<div className='nav-bar'>
				<Image src={logoPic} alt='1337 Logo' className='image'/>
				{/* <img src={logo} alt='1337 Logo' /> */}
				<nav>
					<ul>
						<li>
							<a href='#'>
								Foot<span>Rez</span>
							</a>
						</li>
					</ul>
				</nav>
				<i
					onClick={lightMode}
					id='mode-toggle'
					className='fa-solid fa-circle-half-stroke fa-3x'
				></i>
			</div>
		</>
	);
}

export default Nav;
