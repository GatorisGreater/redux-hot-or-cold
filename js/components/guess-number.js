import React from 'react';
import {connect} from 'react-redux';

/*Renders user guest count*/

export function GuessNumber (props) {

	return (
		<div className="guess-number-counter">
			<p>Guess #
			<span>{props.counter}</span>
			! </p>
		</div>
	)
}

const mapStateToProps = (state, props) => {
	return {
		counter: state.guessHistory.length
	}
}

export default connect(mapStateToProps)(GuessNumber);