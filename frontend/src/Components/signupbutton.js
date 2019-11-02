import React, { Component } from 'react';

class SignUpButton extends Component{
	render(){
		return(
			<a href='/signup'><button class="btn btn-outline-success my-2 my-sm-0" >Sign Up</button></a>
		);
	}
}

export default SignUpButton;