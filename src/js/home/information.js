"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

import Home from './home.js';
import Classify from './classify.js';
import My from './my.js';

class Information extends React.Component {
	componentDidMount(){
		$(function(){
			var tabsSwiper;
			tabsSwiper = new Swiper('.swiper-container', {
				speed : 500,
				onSlideChangeStart : function() {
					$(".tabs .active").removeClass('active');
					$(".tabs li").eq(tabsSwiper.activeIndex).addClass('active');
				}
			});
			$(".tabs li").on('touchstart mousedown', function(e) {
				e.preventDefault()
				$(".tabs .active").removeClass('active');
				$(this).addClass('active');
				tabsSwiper.swipeTo($(this).index());

			});
			$(".tabs li").click(function(e) {
				e.preventDefault();
			});
		})
		
	}
	render(){
		return (
			<div className="information">
				<header>
					<span>消息</span>
				</header>
				<ul className="tabs">
					<li className="part active">
						<a>评论/收藏</a>
						<img src="./img/border.jpg"/>
					</li>
					<li className="part">
						<a >通知</a>
						<img src="./img/border.jpg"/>
					</li>
					<li className="part"><a>广播</a></li>
				</ul>
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide swiper-slide-visible swiper-slide-active">
							<div className="content-slide">
								<img src="./img/default/null_data@3x.png" className="slideImg"/>
								<span>暂无消息</span>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="content-slide">
								<img src="./img/default/serach@3x.png" className="slideImg"/>
								<span>暂无通知消息</span>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="content-slide">
								<div className="radio">
									<ul>
										
										<li>
											<div>
												<img src="./img/person.jpg" className="img"/>
												<dl>
													<dt>萌煮官方</dt>
													<dd>2017-08-17 20：12：10</dd>
												</dl>
											</div>
											<span>宝宝版茄汁虾,酸甜可口超下饭！</span>
											<a>查看详情>></a>
										</li>
										<li>
											<div>
												<img src="./img/person.jpg" className="img"/>
												<dl>
													<dt>萌煮官方</dt>
													<dd>2017-08-17 20：12：10</dd>
												</dl>
											</div>
											<span>宝宝版茄汁虾,酸甜可口超下饭！</span>
											<a>查看详情>></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer>
					<ul>
						<li>
							<Link to="/">
								<i><img src="./img/tabBar/home_normal.png" /></i>
								<b className="home">首页</b>
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
							<Link to="/Informationin">
								<i><img src="./img/tabBar/xiaoxi_pressed.png" /></i>
								<b className="inf">消息</b>
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

export default Information;