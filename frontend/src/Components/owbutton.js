import React, { Component } from 'react';

class OWButton extends Component{
	render(){
		return(
			<a href='/overwatch'><button><img src={require('../Images/owlogo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default OWButton;