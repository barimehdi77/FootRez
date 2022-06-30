import styles from '../styles/day.module.css'
import TimeSlot from "./timeSlot";

function Day(props) {
	return (
		<div className={styles.day}>
			<h2 style={Object.assign({textTransform: 'capitalize'}, {fontWeight: '500'})}>{props.day}</h2>
			<TimeSlot time="6PM - 7PM" />
			<TimeSlot time="7PM - 8PM" />
			<TimeSlot time="8PM - 9PM" />
		</div>
	);
}

export default Day;
