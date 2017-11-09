"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import ClassifyCon from '../component/classify_con.js';
import store from '../store/store.js';
import Home from './home.js';
import Information from './information.js';
import My from './my.js';

class Classify extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			classify:[],
			title:store.getState().title,
			items:[]
		}
		fetch('./mock/classify.json').then(response=>{
			return response.json()
		}).then(result=>{
			console.log(result.classify[0].content);
			this.setState({classify:result.classify});
			this.setState({items:result.classify[0].content});
		})
	}
	showlist(tit){
		fetch('./mock/classify.json').then(response=>{
			return response.json()
		}).then(result=>{
			var classList=[];
			for(var i=0; i<result.classify.length;i++){
				if(result.classify[i].title == tit){
					classList.push(result.classify[i]);
				}
			}
			store.dispatch({
				type:'SHOW_LIST',
				classList:classList[0].content,
				classTit:tit
			})
		})
	}
	_onchange(){
		this.setState({items:store.getState().classifyList,title:store.getState().classTit});
		
	}
	componentDidMount(){
		store.subscribe(this._onchange.bind(this));

		this.refs.sec.style.height = document.documentElement.clientHeight - this.refs.header.clientHeight - this.refs.footer.clientHeight + "px";
	}
	render(){
		var classify = this.state.classify.map((i, ind)=>{
			return(
				<li key={i.title} onClick={this.showlist.bind(this,i.title)}>
					{i.title}
				</li>
			)
		})

		return (

			<div className = "Classify">
				<header ref="header">
					<input type="text" value="搜索菜谱、作者" />
				</header>
				<section ref="sec">
					<ul className="secLeft">
						{classify}
					</ul>
					
					<ClassifyCon list={this.state.items} title={this.state.title}/>
				</section>
				<footer ref="footer">
					<ul>
						<li>
							<Link to="/">
								<i><img src="./img/tabBar/home_normal.png" /></i>
								<b className="home">首页</b>
							</Link>
						</li>
						<li>
							<Link to="/classify">
								<i><img src="./img/tabBar/fenlei_pressed.png" /></i>
								<b className="clas">分类</b>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i><img src="./img/tabBar/home_normal.png" /></i>
								<b>分享</b>
							</Link>
						</li>
						<li>
							<Link to="/information">
								<i><img src="./img/tabBar/xiaoxi_normal.png" /></i>
								<b>消息</b>
							</Link>
						</li>
						<li>
							<Link to="/my">
								<i><img src="./img/tabBar/wode_normal.png" /></i>
								<b>我的</b>
							</Link>
						</li>
						
					</ul>
				</footer>
			</div>
		)
	}

}

export default Classify;