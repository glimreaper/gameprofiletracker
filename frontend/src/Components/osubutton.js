import React, { Component } from 'react';

class OsuButton extends Component{
	render(){
		return(
			<a href='/osu'><button><img src={require('../Images/osulogo.png')} width="70" height = "70" alt=""/></button></a>
		);
	}
}

export default OsuButton;