import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignUpButton from './signupbutton';
import OWButton from './owbutton';
import FNButton from './fortnitebutton';
import TFTButton from './tftbutton';
import OsuButton from './osubutton';
import LOLButton from './lolbutton';
import CSGOButton from './csgobutton';
import R6Button from './r6button';
import cookie from 'react-cookies';

class NavBar extends Component{
	constructor(props){
    super(props);
    this.state={
      redirect: false,
      inputname:'',
      inputpasswd:'',
      currentuser:'loggedout'
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

  handleInputChange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitLogin = (event) =>{
    event.preventDefault();
    var data = {
      inputname: this.state.inputname,
      inputpasswd: this.state.inputpasswd,
      mode: "login"
    }
    fetch("http://localhost:9000/loginapi",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === "true"){
          console.log("You logged on as " + res.currentuser);
          this.setState({
            currentuser: res.currentuser
          })
          cookie.save('currentuser', res.currentuser, {path:'/'});
          console.log('cookie saved');
        }
        else{
          console.log("You entered the wrong username or password. Please try again.")
        }
    })

  }

  handleSubmitLogout = (event) =>{
    event.preventDefault();
    var data = {
      mode: "logout"
    }
    fetch("http://localhost:9000/loginapi",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(res=> {
      console.log("Logged out");
      cookie.save('currentuser', 'loggedout', {path:'/'});
      this.setRedirect();
      this.setState({
        currentuser: res.currentuser
      })
    })
  }

  callAPI(){   //requests the server data when the page loads
    console.log(cookie.loadAll());

    this.setState({
      currentuser: cookie.loadAll().currentuser
    })
    /*
    fetch("http://localhost:9000/loginapi")
      .then(res => res.json())
      .then(res => this.setState({
        currentuser: res.currentuser
      }));
    */
  }

  componentDidMount(){
    this.callAPI();
  }

	render(){
    if (this.state.currentuser === 'loggedout'){
		  return(
       <div>
       {this.renderRedirect()}
			 <nav class="navbar navbar-expand-sm navbar-light bg-dark justify-content-between">
          <div>
            <font color="white" size="10"> Save Profiles for Various Games </font>
          </div>
          <div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="Username" placeholder="Username" name="inputname" onChange = {this.handleInputChange}/>
                <input class="form-control mr-sm-2" type="Password" placeholder="Password" name="inputpasswd" onChange = {this.handleInputChange}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmitLogin}>Log In</button>

            </form>
            <font color="white" size="3">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; new to the site? </font>
            <SignUpButton/>
          </div>
			 </nav>
       </div>
		  );
    }
    else{
      return(
      <div>
      {this.renderRedirect()}
      <nav class="navbar navbar-expand-sm navbar-light bg-dark justify-content-between">
        <div>
          <font color="white" size="10"> Games </font>
          <OWButton/>
          <FNButton/>
          <TFTButton/>
          <OsuButton/>
          <LOLButton/>
          <CSGOButton/>
          <R6Button/>
        </div>
        <div>
           <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmitLogout}>Log Out</button>

            </form>
        </div>
      </nav>
      </div>
    );
    }
	}
}

export default NavBar;