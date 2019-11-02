import React, { Component } from 'react';

class FNButton extends Component{
	render(){
		return(
			<a href = '/fortnite'><button><img src={require('../Images/fortnitelogo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default FNButton;