import React from 'react';
import '../App.css';
import icon2 from '../src/icons/2.svg';
import { Link, useNavigate, NavLink } from 'react-router-dom';

function Nav() {
	const history=useNavigate();
	const locate = (props) => {history('/app')}
	
	return (
		<>
			<div id="nav">
			 <img src={icon2} onClick={locate} width="60" />
			</div>
		</>
	);
}

export default Nav;
