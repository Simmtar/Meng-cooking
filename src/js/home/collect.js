"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import store from '../store/store.js';

class Collect extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collect:store.getState().shouCang,
		}
	
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
		console.log(this.state.collect);
		var fenHTML = this.state.collect.map((i,ind)=>{
			return(
				<li key={i.title} onClick={this.sendDetail.bind(this,i.title)}>
					<Link to="/detail">
						<div><img src={i.img}/></div>
						<dl>
							<dt>{i.title}</dt>
							<dt><span>#疙瘩汤</span><span>{i.select}</span></dt>
							<dt><span>{i.perple}</span></dt>
							<dt>
								<span>{i.num1}</span>人浏览&nbsp;&nbsp;&nbsp;
								<span>{i.num2}</span>人收藏
							</dt>
						</dl>
					</Link>
				</li>
			)
		})
		return (
			<div className="collect">
				<header ref="header">
					<Link to="/my"><img src="./img/tools/mini_webview_back_disable.png"/></Link>
					<span>菜谱</span>
				</header>
				<section>
					<div className="assist">
						<ul>
							{fenHTML}
						</ul>
					</div>
				</section>
			</div>
		)
	}
}

export default Collect;