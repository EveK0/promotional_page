import styles from './Container.module.css';

const Container = (props: { children: JSX.Element; }) => {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}

export default Container;

