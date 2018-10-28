import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{id: "qsxz1", name: "Max", age: "28"},
			{id: "asdf1",name: "Mamu", age: "26"},
			{id: "cvzdfd",name: "Stephanie", age: "24"},
		],
		showPersons: false

	};


	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1); // delete the item at index personInde
		this.setState({persons: persons});

	}

	changeEventHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id;
		})

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];

		persons[personIndex] = person;
		this.setState({
			persons: persons
		})
	}

	togglePersonsHandler = () => { 
		console.log("clicked")
		console.log(this.showPersons)
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}


	render() {


		let persons = null;
		let btnClass = '';
		if (this.state.showPersons) {
			persons = (
				<div> 
				{this.state.persons.map((person, index)  => {
					return <Person 
						click = {() => this.deletePersonHandler(index)}
						name = {person.name}
						age = {person.age}
						key = {person.id} 
						changed = {(event) => this.changeEventHandler(event, person.id)}/>
				})}
	        	</div>  
			)
			btnClass = classes.red;

		}

		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red); 
		}

		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold); 
		}
		
	    return (
		
			<div className = {classes.App}>
				<h1> Hi, I' am a React App </h1>
				<p className = {assignedClasses.join(' ')}> this is really working! </p>
				<button
 					className = {btnClass}
					onClick = {this.togglePersonsHandler}> 
					swich 
				</button>
				{persons}
			</div> 
		
	    );
	    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' am a React App'));
	}
}

export default App;

