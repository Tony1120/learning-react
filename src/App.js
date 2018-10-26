import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [
			{name: "Max", age: "28"},
			{name: "Mamu", age: "26"},
			{name: "Stephanie", age: "24"},
		],
		showPersons: false

	};

	switchNameHandler = (newName) => {
		//console.log('Was clicked!');
		this.setState({
			persons: [
				{name: newName, age: "28"},
				{name: "Mamu", age: "26"},
				{name: "Stephanie", age: "40"},
			]
		})
	}

	changeEventHandler = (event) => {
		this.setState({
			persons: [
				{name: "Max", age: "28"},
				{name: event.target.value, age: "26"},
				{name: "Stephanie", age: "40"},
			]
		})
	}

	togglePersonsHandler = () => { 
		console.log("clicked")
		console.log(this.showPersons)
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}


	render() {


		const style = {
			backgroudColor: 'white',
			font: 'inherit',
			border: '1x solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div> 
				{this.state.persons.map(person  => {
					return <Person 
						name = {person.name}
						age = {person.age} />
				})}
	        	</div>  
			)
		}

	    return (
	      <div className="App">
	        <h1> Hi, I' am a React App </h1>
	        <button
	        	style = {style} 
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

