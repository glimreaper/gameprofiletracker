import React from "react";
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      redirect: false, 
      inputname: '',
      inputemail:'',
      inputpasswd: '',
      inputpasswd2: ''
    };
  }

  setRedirect = () => {
    this.setState({
      redirect:true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect){
      return <Redirect to='/'/>
    }
  }

  handleInputChange = (event) =>{   //handles the change of input that the user types
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
  	event.preventDefault();
  	if (this.state.inputpasswd === this.state.inputpasswd2){
      this.setRedirect();
  		var data = {
  			inputname:this.state.inputname,
  			inputemail:this.state.inputemail,
  			inputpasswd:this.state.inputpasswd
  		}
  		fetch("http://localhost:9000/signupapi",{
  			method: 'POST',
  			headers:{
  				'Content-Type': 'application/json'
  			},
  			body:JSON.stringify(data)
  		})
  		.then(res => res.text())
  		.then(res => console.log(res))
  	};

  }
  render(){
  	return (
  		<div class='alignform'>
        {this.renderRedirect()}
    		<font size="10"> Sign Up </font>
        	<form class="submissionform">
            	<div class="form-group">
            	<label>Username</label>
                	<input type="Username" class="form-control"  placeholder="Enter username" name="inputname" onChange ={this.handleInputChange}/>
            	</div>
            	<div class="form-group">
                	<label>Email</label>
                	<input type="email" class="form-control" placeholder="Enter email" name="inputemail" onChange = {this.handleInputChange}/>
            	</div>
            	<div class="form-group">
                	<label>Password</label>
                	<input type="Password" class="form-control" placeholder="Enter password" name="inputpasswd" onChange = {this.handleInputChange}/>
            	</div>
            	<div class="form-group">
                	<label>Reenter Password</label>
                	<input type="Password" class="form-control" placeholder="Enter password" name="inputpasswd2" onChange = {this.handleInputChange}/>
            	</div>
            	<button type="submit" class="btn btn-primary" onClick={this.handleSubmit} >Submit</button>
        	</form>
    	</div>
  	);
	}
}

export default Signup;