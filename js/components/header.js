import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export function Header (props) {

	return(
		<div className="header-div">
			<nav className="nav-bar">
				<ul> 
					<li>WHAT?</li>
					<li onClick={() => props.dispatch(actions.restartGame())}>+NEW GAME
					</li>
				</ul>
			</nav>
			<h1>HOT or COLD</h1>
		</div>
	)
}

export default connect ()(Header);
