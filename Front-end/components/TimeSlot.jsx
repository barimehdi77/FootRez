import styles from '../styles/timeSlot.module.css'

function TimeSlot(props) {
	return <>
		<button className={styles.timeSlot}>{props.time}</button>
	</>
}

export default TimeSlot;
