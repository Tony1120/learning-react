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


	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1); // delete the item at index 1
		this.setState({persons: persons});

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
				{this.state.persons.map((person, index)  => {
					return <Person 
						click = {() => this.deletePersonHandler(index)}
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

