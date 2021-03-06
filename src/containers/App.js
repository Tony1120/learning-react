import React, { PureComponent } from 'react';
import classes from './App.module.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[APP.js] inside constructor', props)
		this.state = {
			personList: [
				{id: "qsxz1", name: "Max", age: 28},
				{id: "asdf1",name: "Mamu", age: 26},
				{id: "cvzdfd",name: "Stephanie", age: 24},
			],
			showPersonList: false,
			toggleClicked: 0,
			authenticated: false
		};
	}

	componentWillMount() {
		console.log('[APP.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[APP.js] inside ComponentDidMount');
	}

	// shouldComponentUpdate ( nextProps, nextState ) {
 //        console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
        
 //        return nextState.personList !== this.state.personList || nextState.showPersonList !== this.state.showPersonList ; 
 //        //return true;
 //    }

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
		// console.log("clicked")
		// console.log(this.state.showPersonList)
		const doesShow = this.state.showPersonList;

		this.setState((prevState, props) => { 
			return {
				showPersonList: !doesShow,
				toggleClicked: prevState.toggleClicked + 1
			}
		});
	}

	loginHandler = () => {
		this.setState({authenticated: true})
	}

	render() {

		console.log('[APP.js] inside render');
		let personList = null;
		
		if (this.state.showPersonList) {
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
			<Aux>
				<button onClick = {() => {this.setState({showPersonList: true})}}> Show Persons </button>
				<Cockpit
					login = {this.loginHandler}
					title = {this.props.title}
					showPersonList = {this.state.showPersonList}
					personList = {this.state.personList}
					clicked = {this.togglepersonListHandler}/>
					<AuthContext.Provider value = {this.state.authenticated}> {personList} </AuthContext.Provider>
			</Aux>
		
	    );
	    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' am a React App'));
	}
}

export default withClass(App, classes.App);

