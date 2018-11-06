import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[personList.js] inside constructor', props)
		this.lastPersonRef = React.createRef();

	}

	componentWillMount() {
		console.log('[personList.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[personList.js] inside ComponentDidMount');
		this.lastPersonRef.current.focusInput();
	}	

	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE PersonList.js] inside componentWillReceiveProps', nextProps)
	}

	// shouldComponentUpdate ( nextProps, nextState ) {
 //        console.log( '[UPDATE PersonList.js] Inside shouldComponentUpdate', nextProps, nextState );
 //        return nextProps.personList !== this.props.personList || nextProps.clicked !== this.props.clicked || nextProps.changed !== this.props.changed;
        
 //    }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE PersonList.js] Inside componentWillUpdate', nextProps, nextState );
	}

	componentDidUpdate ( ) {
        console.log( '[UPDATE PersonList.js] Inside componentDidUpdate');
	}


	render() {
		return this.props.personList.map((person, index)  => {
					return <Person 
						position = {index}
						click = {() => this.props.clicked(index)}
						name = {person.name}
						age = {person.age}
						ref = {this.lastPersonRef}
						key = {person.id} 
						changed = {(event) => this.props.changed(event, person.id)}/>
		})
	}
}

export default Persons



