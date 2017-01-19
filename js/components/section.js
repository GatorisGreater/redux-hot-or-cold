import React from 'react';
import {connect} from 'react-redux';

import Form from './form';
import GuessNumber from './guess-number';
import List from './list';


export function Section (props) {
	return (
		<section className="section">
		<h2> {props.feedback} </h2>
		<Form />
		<GuessNumber />
		<List />
		</section>
	)
}

const mapStateToProps = (state, props) => {
	return {
		feedback: state.feedback
	}
}

export default connect(mapStateToProps)(Section);