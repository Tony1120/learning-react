import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
class Person extends Component {
	constructor(props) {

		super(props);
		console.log('[Person.js] inside constructor', props)
		this.inputElement = React.createRef();
	}

	componentWillMount() {
		console.log('[Person.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Person.js] inside ComponentDidMount');
		  if (this.props.position ===  1) {
			this.inputElement.current.focus();
		}
	}

	focusInput() {
		this.inputElement.current.focus();
	}

	render() {
		return (
		<Aux>
			<p onClick = {this.props.click} > I'm a {this.props.name} and I am {this.props.age} years old</p>	
			<p> {this.props.children}</p>
			<input 
				ref = {this.inputElement}
				type = "text" 
				onChange = {this.props.changed} 
				value = {this.props.name}/> 
		</Aux>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: 	PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, classes)