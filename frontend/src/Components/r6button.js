import React, { Component } from 'react';

class R6Button extends Component{
	render(){
		return(
			<a href='/r6'><button><img src={require('../Images/r6logo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default R6Button;