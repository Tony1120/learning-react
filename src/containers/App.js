import React, { Component } from 'react';
import classes from './App.module.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[APP.js] inside constructor', props)
		this.state = {
			personList: [
				{id: "qsxz1", name: "Max", age: "28"},
				{id: "asdf1",name: "Mamu", age: "26"},
				{id: "cvzdfd",name: "Stephanie", age: "24"},
			],
			showpersonList: false
		};
	}

	componentWillMount() {
		console.log('[APP.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[APP.js] inside ComponentDidMount');
	}

	shouldComponentUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
        //return nextProps.persons !== this.props.persons;
        return true; 
    }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
	}

	componentDidUpdate () {
        console.log( '[UPDATE App.js] Inside componentDidUpdate');
	}



	deletePersonHandler = (personIndex) => {
		//const personList = this.state.personList.slice();
		const personList = [...this.state.personList];
		personList.splice(personIndex, 1); // delete the item at index personInde
		this.setState({personList: personList});

	}

	changeEventHandler = (event, id) => {
		const personIndex = this.state.personList.findIndex(person => {
			return person.id === id;
		})

		const person = {
			...this.state.personList[personIndex]
		};

		person.name = event.target.value;

		const personList = [...this.state.personList];

		personList[personIndex] = person;
		this.setState({
			personList: personList
		})
	}

	togglepersonListHandler = () => { 
		console.log("clicked")
		console.log(this.showpersonList)
		const doesShow = this.state.showpersonList;
		this.setState({showpersonList: !doesShow})
	}


	render() {

		console.log('[APP.js] inside render');
		let personList = null;
		
		if (this.state.showpersonList) {
			personList = (
				<div> 
					<PersonList 
						personList = {this.state.personList} 
						clicked = {this.deletePersonHandler}
						changed = {this.changeEventHandler}
						/>
	        	</div>  
			)
		}


		
	    return (
			<div className = {classes.App}>
				<Cockpit
					title = {this.props.title}
					showpersonList = {this.state.showpersonList}
					personList = {this.state.personList}
					clicked = {this.togglepersonListHandler}/>
				{personList}
			</div> 
		
	    );
	    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' am a React App'));
	}
}

export default App;

