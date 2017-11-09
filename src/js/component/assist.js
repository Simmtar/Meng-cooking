"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import store from '../store/store.js';

class AssistFood extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cook:[]
		}
		fetch('./mock/detail.json').then(response=>{
			return response.json()
		}).then(result=>{
			this.setState({cook:result.detail});
		})
	}
	
	sendDetail(tit){
		fetch('./mock/detail.json').then(response=>{
			return response.json()
		}).then(result=>{
			var detailDate=[];
			console.log(result.detail);
			for(var i=0; i<result.detail.length;i++){
				if(result.detail[i].title == tit){
					detailDate.push(result.detail[i]);
				}
			}
			store.dispatch({
				type:'SEND_DETAIL',
				detailDate:detailDate
			})
		})
	}
	
	render(){
		var assistHTML = this.state.cook.map((i,ind)=>{
			return(
				<li key={i.title} onClick={this.sendDetail.bind(this,i.title)}>
					<Link to="/detail">
						<div><img src={i.img}/></div>
						<dl>
							<dt>{i.title}</dt>
							<dt><span>#疙瘩汤</span><span>{i.select}</span></dt>
							<dt>{i.year}</dt>
							<dt><img src="./img/user/person1.jpg"/><span>{i.perple}</span></dt>
							<dt>
								<img src="./img/user/eye.jpg"/><span>{i.num1}</span>
								<img src="./img/user/star.jpg"/><span>{i.num2}</span>
							</dt>
						</dl>
					</Link>
				</li>
			)
		})
		return (
			<div className="assist">
				<ul>
					{assistHTML}
				</ul>
			</div>
		)
	}
}

export default AssistFood;