import React from 'react'
import classes from './Cockpit.module.css'
import Aux from '../../hoc/Aux'
const cockpit = (props) => {
	let btnClass = classes.Button;
	if (props.showPersonList) {
		btnClass = [classes.Button, classes.red].join(' ');
	}

	const assignedClasses = [];
	if (props.personList.length <= 2) {
		assignedClasses.push(classes.red); 
	}

	if (props.personList.length <= 1) {
		assignedClasses.push(classes.bold); 
	}

	return (
		<Aux>
			<h1> {props.title} </h1>
			<p className = {assignedClasses.join(' ')}> this is really working! </p>
			<button 
	 			className = {btnClass}
				onClick = {props.clicked}> 
				swich 
			</button>
			<button onClick = {props.login}> Log in </button>
		</Aux>
	)

};

export default cockpit