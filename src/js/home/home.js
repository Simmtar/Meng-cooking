"use strict";

import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import store from '../store/store.js';
import AssistFood from '../component/assist.js';
import Action from '../component/action.js';
import SugDate from './sugDate.js';
import Feilei from './fenlei.js';
import Detail from './detail.js';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menu1:[],
			menu2:[],
			title:store.getState().title
		}
		fetch('./mock/homeMenu.json').then(response=>{
			return response.json()
		}).then(result=>{
			console.log(result);
			this.setState({menu1:result.homeMenu1});
			this.setState({menu2:result.homeMenu2});
		})
	}
	sendFenlei1(title){
		store.dispatch({
			type:'SEND_FENLEI',
			title:title
		})
	}
	sendFenlei2(title){
		store.dispatch({
			type:'SEND_FENLEI',
			title:title
		})
	}
	sugDate(){
		console.log(this.refs.sug);
		this.refs.sug.style.display="block";
	}
	componentDidMount(){
		this.refs.sec.style.height = document.documentElement.clientHeight  - this.refs.footer.clientHeight + "px";
		this.refs.head2.style.top = this.refs.header.clientHeight + "px";

		// var s1 = this.refs.s1.offsetHeight;
		
		var head1 = this.refs.head1;
		var head2 = this.refs.head2;
		console.log(this.refs.header.clientHeight);
		this.refs.sec.addEventListener('scroll', function(event) { 
			// console.log(this.scrollTop);
		   		if(this.scrollTop>=160){
		   			head1.style.display = "block";
		   		}else{
		   			head1.style.display = "none";
		   		}
		   		if(this.scrollTop>=500 && this.scrollTop<=540){
		   			head2.style.display = "block";
		   			this.scrollTop += 50;
		   		}else if(this.scrollTop >= 500){
		   			head2.style.display = "block"; 
		   		}else{
		   			head2.style.display = "none";
		   		}
		}, false);
		
		// this.refs.sec.scrollTop = this.refs.d9.clientHeight + 10000;

		var mySwiper = new Swiper ('.swiper-container', {
		    autoplay:2500,
		    loop:true,
		    // direction: 'vertical',
		    autoplayDisableOnInteraction:false,
		    pagination : '.swiper-pagination',
		    paginationClickable: true,
		    longSwipesRatio: 0.3,
		    touchRatio:1,
		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
		    observeParents:true//修改swiper的父元素时，自动初始化swiper
		    // freeMode : true,
			// freeModeMomentum : false,
		 });
		var swiper = new Swiper('.swiper-container1', {
		    autoplayDisableOnInteraction:false,
		    pagination : '.swiper-pagination1',
		    paginationClickable: true   
	    });
		var swiper = new Swiper('.swiper-container2', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 1.5,
	        paginationClickable: true,
	        spaceBetween: 80
	    });
	}
	
	render(){
		var homeMenu1 = this.state.menu1.map((i, ind)=>{
			return(
				<li key={i.title} onClick={this.sendFenlei1.bind(this,i.title)}>
					<Link to="/fenlei">
						<img src={i.img} />
						<span>{i.title}</span>
					</Link>
					
				</li>
			)
		})
		var homeMenu2 = this.state.menu2.map((i, ind)=>{
			return(
				<li key={i.title} onClick={this.sendFenlei2.bind(this,i.title)}>
					<Link to="/fenlei">
						<img src={i.img} />
						<span>{i.title}</span>
					</Link>
				</li>
			)
		})

		return (	
			
			<div className="home" ref="home">
				<header ref="header">
					<input type="text" value="菜谱秘籍，优质达人"/>
			         	<div ref="head1" className="head1"></div>
					<div ref="head2" className="head2">
						<Link to="/">辅食精选</Link>
						<Link to="/action">关注动态</Link>
					</div>
				</header>
				<section ref="sec" className="section">
					<div className="s1" ref="s1">
						<div className="swiper-container">
						    <div className="swiper-wrapper">
						        <div className="swiper-slide"><img src="./img/default_banner.jpg" alt=""/></div>
						       <div className="swiper-slide"><img src="./img/default_banner.jpg" alt=""/></div>
						    </div>
	    					{/*<div className="swiper-pagination"></div>*/}
						</div>
					</div>

					<div className="s2">
						<div className="s21">
							<div className="ssl">
								<img src="./img/person.jpg" />
								<span><b>宝abc</b>的专属菜单</span>
							</div>
							<div className="ssr" onClick={this.sugDate.bind(this)}>
								<img src="./img/date.jpg"/>
								<span>每日食谱</span>
							</div>
						</div>
						<div className="s22">
							<div className="swiper-container1">
							    <div className="swiper-wrapper">
							        <div className="swiper-slide">
							        	<div className="ssleft">
											<div className="shead">
												<img src="./img/one_two.jpg" />
											</div>
											<ul>
												{homeMenu1}
											</ul>
										</div>
							        </div>
							        <div className="swiper-slide">
							        	<div className="ssleft">
											<div className="shead">
												<img src="./img/one2.jpg" />
											</div>
											<ul>
												{homeMenu2}
											</ul>
											
										</div>
							        </div>
							       
							    </div>
							   {/* <div className="swiper-pagination1"></div>*/}
							</div>
						</div>
					</div>

					<div className="s3">
						{/*<img src="./img/demo/demo-l.jpg" />*/}
						<div className="swiper-container2">
						    <div className="swiper-wrapper">
						        <div className="swiper-slide"><img src="./img/demo/demo-l.jpg" alt=""/></div>
						       <div className="swiper-slide"><img src="./img/demo/demo2.jpg" alt=""/></div>
						       <div className="swiper-slide"><img src="./img/demo/demo-l.jpg" alt=""/></div>
						    </div>
						</div>
					</div>

					<div className="s4">
						<div className="title">
							<Link to="/">辅食精选</Link>
							<Link to="/action">关注动态</Link>
						</div>
						<div>
							<Route exact path="/" component={AssistFood}></Route>
							<Route exact path="/action" component={Action}></Route>
						</div>
					</div>
					<div className="s5">
						
					</div>
				</section>
				<footer ref="footer">
					<ul>
						<li>
							<Link to="/">
								<i><img src="./img/tabBar/home_pressed.png" /></i>
								<b>首页</b>
							</Link>
						</li>
						<li>
							<Link to="/classify">
								<i><img src="./img/tabBar/fenlei_normal.png" /></i>
								<b>分类</b>
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
				<div ref="sug" className="sugg">
					<SugDate />
				</div>
			</div>
				
		
		)
	}
}

export default Home;















