"use strict";

import React from 'react';
import Animate from 'rc-animate';
import { Link, Route } from 'react-router-dom';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import store from '../store/store.js';
import AssistFood from '../component/assist.js';
import Zhe from '../component/zhe.js';

class Action extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fendet:[],
			select1:[],
			select2:[],
			tit:store.getState().fenSel,
			headTit:store.getState().fenleiTit
		}
		fetch('./mock/detail.json').then(response=>{
			return response.json()
		}).then(result=>{
			this.setState({fendet:result.detail});
		})
		fetch('./mock/select.json').then(response=>{
			return response.json()
		}).then(result=>{
			this.setState({select1:result.select1});
			this.setState({select2:result.select2});
		})
	}
	show1(e){
		var e = e || window.event;
		this.refs.zhe.style.display = "block";
		this.refs.oul1.style.display = "block";
		this.refs.oul2.style.display = "none";
	}
	show2(e){
		var e = e || window.event;
		this.refs.zhe.style.display = "block";
		this.refs.oul1.style.display = "none";
		this.refs.oul2.style.display = "block";
	}
	
	hidden(e){
		var e = e || window.event;
		this.refs.zhe.style.display = "none";
	}
	select(tit){
		fetch('./mock/detail.json').then(response=>{
			return response.json()
		}).then(result=>{
			var fenSel=[];
			for(var i=0; i<result.detail.length;i++){
				if(result.detail[i].select1 == tit){
					fenSel.push(result.detail[i]);
				}else if(result.detail[i].select2 == tit){
					fenSel.push(result.detail[i]);
				}else if(tit == "全部月龄"){
					fenSel.push(result.detail[i]);
				}
			}
			
			store.dispatch({
				type:'TIT_SEND',
				fenSel:fenSel
			})
		})
	}
	sendDetail(tit){
		fetch('./mock/detail.json').then(response=>{
			return response.json()
		}).then(result=>{
			var detailDate=[];
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
	_onchange(){

		this.setState({
			fendet:store.getState().fenSel
		})
	}

	componentDidMount(){

		store.subscribe(this._onchange.bind(this));
		
		this.refs.sec.style.height = document.documentElement.clientHeight - this.refs.header.clientHeight - this.refs.uls.clientHeight + "px";
		this.refs.zhe.style.top =this.refs.header.clientHeight + this.refs.uls.clientHeight + 2 + "px";
		this.refs.zhe.style.height = document.documentElement.clientHeight - this.refs.header.clientHeight - this.refs.uls.clientHeight +"px";
	}
	render(){
		var fenHTML = this.state.fendet.map((i,ind)=>{
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
		var select1 = this.state.select1.map((i,ind)=>{
			return(
				<li key={i.tit} onClick={this.select.bind(this,i.tit)}>{i.tit}</li>
			)
		})
		var select2 = this.state.select2.map((i,ind)=>{
			return(
				<li key={i.tit} onClick={this.select.bind(this,i.tit)}>{i.tit}</li>
			)
		})
		return (
				<div className="fenlei fenTran-enter-active">
					<header ref="header">
						<Link to="/"><img src="./img/tools/mini_webview_back_disable.png"/></Link>
						<span>{this.state.headTit}</span>
					</header>
					<ul className="uls" ref="uls" >
						<li onClick={this.show1.bind(this)}>月龄筛选<img src="./img/tools/down.jpg"/></li>
						<li onClick={this.show2.bind(this)}>最新发布<img src="./img/tools/down.jpg"/></li>
					</ul>
					<div className="zheBox" ref="zhe" onClick={this.hidden.bind(this)}>
						<div className="zhe">
							<ul ref="oul1">
								{select1}
							</ul>
							<ul ref="oul2">
								{select2}
							</ul>
						</div>
					</div>
					<div className="sec" ref="sec">
						<div className="assist">
							<ul>
								{fenHTML}
							</ul>
						</div>
					</div>
				</div>
			
		);
	}
}

export default Action;