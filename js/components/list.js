import React from 'react';
import {connect} from 'react-redux';

/*Will be used to render guess history*/

export function List (props) {

	return (
		<div className="guess-list"> <ul>
			<li>{props.guessHistory}</li>
			</ul>
		</div>
		)
}

const mapStateToProps = (state, props) => {
	return {
		guessHistory: state.guessHistory
	}
}

export default connect(mapStateToProps)(List);