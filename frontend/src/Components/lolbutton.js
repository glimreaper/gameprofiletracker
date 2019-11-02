import React, { Component } from 'react';

class LOLButton extends Component{
	render(){
		return(
			<a href='/lol'><button><img src={require('../Images/lollogo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default LOLButton;