"use strict";

import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store/store.js';

class ClassifyCon extends React.Component {
	sendFenlei(title){
		store.dispatch({
			type:'SEND_FENLEI',
			title:title
		})
	}
	render(){
		// console.log(this.props.list);
		var listHTML = this.props.list.map((i,idx)=>{
			return(
				<li key={idx} onClick={this.sendFenlei.bind(this,i.tit)}>
					<Link to="/fenlei">
						<img src={i.img}/>
						<span>{i.tit}</span>
					</Link>
				</li>
			)
		})
		return (
			
			<div className="secRight">
				<div>{this.props.title}</div>
				<ul className="lis">
					{listHTML}
				</ul>
			</div>
		)
	}
}

export default ClassifyCon;