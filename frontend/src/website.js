import React from 'react';
import Home from './Pages/Home';
import CSGO from './Pages/csgo';
import FN from './Pages/fortnite';
import TFT from './Pages/tft';
import R6 from './Pages/r6';
import Osu from './Pages/osu';
import OW from './Pages/overwatch';
import Signup from './Pages/signup';
import LOL from './Pages/lol';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

class Website extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      login: 'none', 
    }
  }
  render(){
    return (
  	  <BrowserRouter>
  		  <div>
  			 <Switch>
  				<Route path='/csgo' component={CSGO}/>
  				<Route path='/fortnite' component={FN}/>
  				<Route path='/signup' component={Signup}/>
  				<Route path='/lol' component={LOL}/>
  				<Route path='/osu' component={Osu}/>
  				<Route path='/overwatch' component={OW}/>
  				<Route path='/r6' component={R6}/>
  				<Route path='/tft' component={TFT}/>
  				<Route path='/' exact component={Home}/>
  			 </Switch>
    	  </div>
      </BrowserRouter>
    );
  }
}

export default Website;