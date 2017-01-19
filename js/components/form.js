import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';



export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitGuess = this.submitGuess.bind(this);
    }

    submitGuess(event) {
    	event.preventDefault();
    	console.log(this.refs.input.value)
        this.props.dispatch(
            actions.userGuess(this.refs.input.value));
        document.getElementById('ref-input').value='';
    }

    render() {
       	return (
			<form className="form" onSubmit={this.submitGuess}>
				<input type="text" id="ref-input" placeholder="Enter Your Guess" ref="input" required />
				<input type="submit" name="submit" value="Guess" />
			</form>
		);
    }
}


/* export function Form() {

	return (
		<form className="form" onSubmit={() => props.dispatch(actions.userGuess(event.Target.value))}>
			<input type="text" placeholder="Enter Your Guess" />
			<input type="submit" />
		</form>
	)
} */

export default connect()(Form);