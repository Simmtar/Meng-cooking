'use strict';
import '../styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './home/homeBox.js';


let enterFun = (nextState) =>{
	console.log(nextState);
}
let leaveFun = (b) =>{
	console.log(b);
}


ReactDom.render(
	
	<Home/>
	,
	document.getElementById('app')
)


if(module.hot){
	module.hot.accept();
}
