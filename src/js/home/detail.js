"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import store from '../store/store.js';

class Detali extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			detail:[],
			review:[]
			
		}
	}
	_onchange(){
		this.setState({
			detail:store.getState().detailDate[0],
			review:store.getState().txtPub,
		});
		
	}
	showPing(){
		this.refs.d9.style.display = "block";
		this.refs.sec.scrollTop = this.refs.d9.clientHeight + 10000;
	}
	publish(){
		var txt = this.refs.textarea.value;
		var pubObj = {
			"person":"宝abc",
			"date":"2017-08-18",
			"content":this.refs.textarea.value
		}
		store.dispatch({
			type:'ADD_PUBLISH',
			txtPub:pubObj
		})
		this.refs.d9.style.display = "none";
	}
	hidd(){
		this.refs.succ.style.display = "block";
		setTimeout(function(){
			this.refs.succ.style.display = "none";
		}.bind(this),2000)
		store.dispatch({
			type:'SHOU_CANG',
			content:this.state.detail
		})
	}
	componentDidMount(){
		//subscribe绑定数据更新后所触发的方法
		store.subscribe(this._onchange.bind(this));
		this.refs.sec.style.height = document.documentElement.clientHeight  - this.refs.footer.clientHeight - this.refs.header.clientHeight + "px";
	}
	render(){
		var reviewHTML = this.state.review.map((i,ind)=>{
			return(
				<li key={ind}>
					<img src="./img/user/person2.jpg" />
					<dl>
						<dt>{i.person}</dt>
						<dd>{i.date}</dd>
						<dd>{i.content}</dd>
					</dl>
					<img src="./img/user/email.jpg" className="d8img"/>
				</li>
			)
		})
		return (
			<div className="detail">
				<header ref="header">
					<Link to="/"><img src="./img/tools/mini_webview_back_disable.png"/></Link>
					<span>菜谱详情</span>
				</header>
				<section ref="sec">
					<div className="d1">
						<img src="./img/user/person1.jpg" />
						<dl>
							<dt>{this.state.detail.perple}</dt>
							<dd>281菜谱</dd>
						</dl>
						<button>+ 未关注</button>
					</div>
					<div className="d2">
						<img src={this.state.detail.img} />
					</div>
					<dl className="d3">
						<dt>{this.state.detail.title}</dt>
						<dd>2017.08.14</dd>
					</dl>
					<div className="d4">
						<div className="d44">
							<img src="./img/up.jpg" className="d4img"/>
							<div className="d4tit">简单快手的早餐饼。</div>
							<div className="d4m">萌煮分类</div>
							<ul>
								<li>1岁-2岁</li>
								<li>2岁-3岁</li>
								<li>早餐</li>
								<li>早餐</li>
								<li>早餐</li>
							</ul>
						</div>
					</div>
					<div className="d5">
						<div className="cai">
							<img src="./img/cook/shicai.jpg"/>
						</div>
						<ul>
							<li>春卷皮/两张</li>
							<li>春卷皮/两张</li>
							<li>春卷皮/两张</li>
							<li>春卷皮/两张</li>
						</ul>
					</div>
					<div className="d6">
						<div className="cai">
							<img src="./img/cook/bu.jpg"/>
						</div>
						<ul>
							<li>
								<span>1</span>
								<img src="./img/cook/det4.jpg" />
							</li>
							<li>
								<span>2</span>
								<img src="./img/cook/det1.jpg" />
							</li>
							<li>
								<span>3</span>
								<img src="./img/cook/det2.jpg" />
							</li>
							<li>
								<span>4</span>
								<img src="./img/cook/det3.jpg" />
							</li>
						</ul>
					</div>
					<div className="d7">
						<div className="cai">
							<img src="./img/cook/small.jpg"/>
						</div>
						<ul>
							<li><img src="./img/user/yuan.jpg"/>原创菜谱保护</li>
							<li>原创作品，禁止转载；</li>
							<li>禁止商业使用；禁止个人使用；</li>
						</ul>
					</div>
					<div className="d8">
						<div className="cai">
							<img src="./img/cook/ping.jpg"/>
						</div>
						<ul>
							{reviewHTML}
						</ul>
					</div>
					<div className="d9" ref="d9">
						<textarea rows="4" ref="textarea"></textarea>
						<button onClick={this.publish.bind(this)}>发表评论</button>
					</div>
					<div className="succ" ref="succ">
						收藏成功！
					</div>
				</section>
				<footer ref="footer">
					<ul>
						<li onClick={this.showPing.bind(this)}>
							<img src="./img/cook/btn_pinglun3.png"/>
							<span>评论</span>
						</li>
						<li onClick={this.hidd.bind(this)}>
							<img src="./img/cook/btn_shoucang_normal.png"/>
							<span>收藏</span>
						</li>
						<li>
							<img src="./img/cook/btn_share2.png"/>
							<span>分享</span>
						</li>
					</ul>
				</footer>
			</div>
		)
	}
}

export default Detali;