import React from "react";
import NavBar from '../Components/navbar';
import "../Pages/pagestyle.css";
import cookie from 'react-cookies';
import { Dropdown } from 'semantic-ui-react';


class CSGO extends React.Component {
  constructor(props){
    super(props);
    this.state= { 
      mynames: [],
      mylinks: [],
      friendnames: [],
      friendlinks: [],
      inputlink: '',
      inputname: '',
      inputtype: '',
      currentuser:'loggedout'
    };
  }

  handleSubmit = (event) =>{     //handles the submit button
    event.preventDefault();
    var data = {
      inputlink: this.state.inputlink,
      inputname: this.state.inputname,
      inputtype: this.state.inputtype,
      currentuser: this.state.currentuser
    }
   fetch("http://localhost:9000/csgoapi",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
   .then(res => res.json())
   .then(res =>{ 
        console.log(res);
        this.setState({
            mynames: JSON.parse(res.mypfnames),
            mylinks: JSON.parse(res.mypflinks),
            friendnames: JSON.parse(res.friendpfnames),
            friendlinks: JSON.parse(res.friendpflinks)
      })
    }); 
  }

  handleInputChange = (event) =>{   //handles the change of input that the user types
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInputChangeType = (event) =>{ //handles change of input that the user selects
    event.preventDefault();
    var selectedValue = document.getElementById("list").value;
    this.setState({
      inputtype: selectedValue
    })

  }

  callAPI(){   //requests the server data when the page loads
    var data = {
      currentuser: this.state.currentuser
    }
    fetch("http://localhost:9000/csgoapi/loadpage",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
            mynames: JSON.parse(res.mypfnames),
            mylinks: JSON.parse(res.mypflinks),
            friendnames: JSON.parse(res.friendpfnames),
            friendlinks: JSON.parse(res.friendpflinks)
        })
      });

  }

  componentDidMount(){
    this.setState({
      currentuser: cookie.loadAll().currentuser
    }, ()=>{
      this.callAPI();
    })
  }

  render() {
    return (
      <div>
          <NavBar/>
          <div class="csgo">
              <div class="row">
                  <div class="column" style={{backgroundColor: 'rgba(63, 63, 191, 0.5)'}}>             
                      <font color="white" size="10"> Add a profile </font>
                      <form class="submissionform">
                        <div class="form-group">
                            <label class='textcolor'>Link to profile</label>
                            <input type="url" class="form-control"  placeholder="Enter profile link" name="inputlink" onChange ={this.handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label class='textcolor'>Username</label>
                            <input type="text" class="form-control" placeholder="Enter username" name="inputname" onChange = {this.handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label class='textcolor'>Profile Type</label>
                            <select class="form-control" id="list" onChange={this.handleInputChangeType}>
  					                     <option value="default">Choose profile type</option>
  					                     <option value="personal">Personal</option>
  					                     <option value="friends">Friends</option>
			  	                  </select>
			                  </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit} >Submit</button>
                      </form>
                  </div>
                  <div class="column" style={{backgroundColor: 'rgba(52, 52, 52, 0.5)'}}>
                      <div>
                          <font color="white" size="7"> Your Profile: </font>
                      </div>
                      <div>
                           <font size="5"><a href={this.state.mylinks[4]} style = {{color:'red'}}>{this.state.mynames[4]}</a></font>
                      </div>
                      <div>
                          <font color="white" size="7"> Friend Profiles: </font>
                      </div>
                      <div>
                          <font size="5"><a href={this.state.friendlinks[2]} style = {{color: 'red'}} >{this.state.friendnames[2]}</a></font>
                      </div>
                  </div>
              </div>
          </div>
     </div>
    );
  }
}

export default CSGO;