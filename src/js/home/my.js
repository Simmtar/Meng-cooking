"use steict";
import React from 'react';
import { Link } from 'react-router-dom';

import Home from './home.js';
import Classify from './classify.js';
import Information from './information.js';
import store from '../store/store.js';
import Collect from './collect.js';

class My extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collect:store.getState().shouCang,
		}
	
	}
	componentDidMount(){
		
	}
	render(){
		console.log(this.state.collect.length);
		return(
			<div className="my">
				<header>
					<span>我的</span>
					<img src="./img/user/setting.png" />
				</header>
				<div className="m1">
					<img src="./img/user/p2.jpg"/>	
					<img src="./img/user/dirction.jpg"/>
				</div>
				<ul className="m2">
					<li><span>0</span>粉丝</li>
					<li><span>0</span>关注</li>
				</ul>
				<ul className="m3">
					<li>
						<Link to="/collect">
							<img src="./img/user/favorite@2x.png" />
							<span>我的收藏</span>
							<i>{this.state.collect.length}</i>
						</Link>
					</li>
					<li>
						<a>
							<img src="./img/user/cook@2x.png" />
							<span>我的菜谱</span>
							<i>0</i>
						</a>
					</li>
					<li>
						<a>
							<img src="./img/user/drafts@2x.png" />
							<span>草稿箱</span>
							<i>0</i>
						</a>
					</li>
				</ul>
				<div className="m4">
					<img src="./img/user/bind.png"/>
					<span>绑定智能厨房设备</span>
				</div>
				<ul className="m5">
					<li>
						<img src="./img/user/li1.jpg" />
						<span>宝宝档案</span>
					</li>
					<li>
						<img src="./img/user/li2.jpg" />
						<span>付费课程</span>
					</li>
					<li>
						<img src="./img/user/li3.jpg" />
						<span>浏览历史</span>
					</li>
				</ul>
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
							<Link to="/information">
								<i><img src="./img/tabBar/xiaoxi_normal.png" /></i>
								<b>消息</b>
							</Link>
						</li>
						<li>
							<Link to="/my">
								<i><img src="./img/tabBar/wode_pressed.png" /></i>
								<b className="myy">我的</b>
							</Link>
						</li>
						
					</ul>
				</footer>

			</div>
		)
	}
}

export default My;