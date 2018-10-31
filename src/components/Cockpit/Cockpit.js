import React from 'react'
import classes from './Cockpit.module.css'
const cockpit = (props) => {
	let btnClass = '';
	if (props.showPersonList) {
		btnClass = classes.red;
	}

	const assignedClasses = [];
	if (props.personList.length <= 2) {
		assignedClasses.push(classes.red); 
	}

	if (props.personList.length <= 1) {
		assignedClasses.push(classes.bold); 
	}

	return (
		<div className = {classes.Cockpit}>
			<h1> {props.title} </h1>
			<p className = {assignedClasses.join(' ')}> this is really working! </p>
			<button
	 			className = {btnClass}
				onClick = {props.clicked}> 
				swich 
			</button>
		</div>
	)

};

export default cockpit