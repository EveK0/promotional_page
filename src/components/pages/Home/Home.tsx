import { Reveal } from '../../Animations/Reveal';
import styles from './Home.module.css';
const Home = () => {
	return (
		<center className={styles.center}>
			<header className={styles.header}>
				<div id={styles.left}>
					<Reveal>
						<h1 >Solving system for <span> RECAPTCHA </span></h1>
					</Reveal>
					<button type='submit'>See More</button>
				</div>
				<div id={styles.right}>
					<Reveal>
						<h1>
							Working for you Work <span> Less </span></h1>
					</Reveal>
				</div>
			</header>
			<main>
				<div className={styles.content}>
					<Reveal>
						<h2>Scroll to see our solution</h2>
					</Reveal>
					<div className={styles.down_arrow}></div>
				</div>
			</main>
		</ center>
	)
}

export default Home;

