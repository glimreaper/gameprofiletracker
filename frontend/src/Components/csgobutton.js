import React, { Component } from 'react';

class CSGOButton extends Component{
	render(){
		return(
			<a href = '/csgo'><button><img src={require('../Images/csgologo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default CSGOButton;