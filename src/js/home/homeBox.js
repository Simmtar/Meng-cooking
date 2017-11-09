"use strict";

import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';


import Home from './home.js';
import Classify from './classify.js';
import Information from './information.js';
import My from './my.js';
import Detail from './detail.js';
import Feilei from './fenlei.js';
import Collect from './collect.js';

class HomeBox extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<div className="homebox">
					{/*<Route exact path="/" component={Home}></Route>*/}
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/classify" component={Classify}></Route>
					<Route exact path="/information" component={Information}></Route>
					<Route exact path="/my" component={My}></Route>
					<Route exact path="/fenlei" component={Feilei}></Route>
					<Route exact path="/detail" component={Detail}></Route>
					<Route exact path="/collect" component={Collect}></Route>
					
				</div>
			</BrowserRouter>
		)
	}
}

export default HomeBox;















