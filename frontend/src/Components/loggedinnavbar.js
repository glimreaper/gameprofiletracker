import React, { Component } from 'react';
import OWButton from './owbutton';
import FNButton from './fortnitebutton';
import TFTButton from './tftbutton';
import OsuButton from './osubutton';
import LOLButton from './lolbutton';
import CSGOButton from './csgobutton';
import R6Button from './r6button';

class LoggedinNavBar extends Component{
	state = {}
	render(){
		return(
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
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button>

            </form>
        </div>
			</nav>
		);
	}
}

export default LoggedinNavBar;