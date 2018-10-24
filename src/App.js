import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [
			{name: "Max", age: "28"},
			{name: "Mamu", age: "26"},
			{name: "Stephanie", age: "24"},
		]

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



	render() {
		const style = {
			backgroudColor: 'white',
			font: 'inherit',
			border: '1x solid blue',
			padding: '8px',
			cursor: 'pointer'
		};
	    return (
	      <div className="App">
	        <h1> Hi, I' am a React App </h1>
	        <button
	        	style = {style} 
	        	onClick = {this.switchNameHandler.bind(this, "Maxwell")}> swich </button>
	        <Person 
	        	name = {this.state.persons[0].name} 
	        	age = {this.state.persons[0].age}/>
	        <Person 
	        	click = {() => this.switchNameHandler("kafa")}
	        	changed = {this.changeEventHandler}
	        	name = {this.state.persons[1].name} 
	        	age = {this.state.persons[1].age}>My Hobbies: Racing </Person>
	        <Person 
	        	name = {this.state.persons[2].name} 
	        	age = {this.state.persons[2].age}/>
	      </div> 
	    );
	    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' am a React App'));
	}
}

export default App;

