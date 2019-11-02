import React, { Component } from 'react';

class TFTButton extends Component{
	render(){
		return(
			<a href='/tft'><button><img src={require('../Images/tftlogo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default TFTButton;