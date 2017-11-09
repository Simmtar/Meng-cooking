"use strict";

import React from 'react';

class Action extends React.Component {

	render(){
		return (
			<div className="action">
				<img src="./img/default/follow@3x.png"/>
				<div>萌煮优质达人等你来关注</div>
				<button>关注</button>
			</div>
		)
	}
}

export default Action;