import React from "react";
import NavBar from '../Components/navbar';
import "../Pages/pagestyle.css";

class OW extends React.Component {

  render() {
    return (
      <div>
          <NavBar/>
          <div class="overwatch">
              <div class="row">
                  <div class="column" style={{backgroundColor: 'rgba(63, 63, 191, 0.5)'}}>
                      <font color="white" size="10"> Add a profile </font>
                      <form class="submissionform">
                        <div class="form-group">
                            <label class='textcolor'>Link to profile</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter profile link"/>
                        </div>
                        <div class="form-group">
                            <label class='textcolor'>Username</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                        </div>
                        <div class="form-group">
                            <label class='textcolor'>Profile Type</label>
                            <select class="form-control">
                                 <option>Choose profile type</option>
                                 <option>Personal</option>
                                 <option>Friends</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                  </div>
                  <div class="column" style={{backgroundColor: 'rgba(52, 52, 52, 0.5)'}}>
                      <div>
                          <font color="white" size="7"> Your Profile: </font>
                      </div>
                      <div>
                          <font color="white" size="7"> Friend Profiles: </font>
                      </div>
                  </div>
              </div>
          </div>
     </div>
    );
  }
}

export default OW;