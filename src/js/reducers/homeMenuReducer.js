"use strict";
import React from 'react';
const defaultState = {
	classifyList:[],
	classTit:["热门"],
	detailDate:[],
	fen_tit:[],
	fenSel:[],
	txtPub:[],
	shouCang:[],
	fenleiTit:[]

}

// 组件dispatch时，向todoReducer发送的是（项目当前的状态state，action）
const homeMenuReducer = (state= defaultState, action={})=>{
	switch(action.type){
		case 'SHOW_LIST' :
			state.classifyList.splice(0,state.classifyList.length);
			state.classTit.splice(0,1,action.classTit);
			state.classifyList = [...state.classifyList,...action.classList];
			return Object.assign({}, state,{});

		case 'SEND_FENLEI' :
			state.fenleiTit.splice(0,state.fenleiTit.length);
			state.fenleiTit = [...state.fenleiTit,action.title];
			return Object.assign({}, state,{});
		
		case 'SEND_DETAIL' :
			state.detailDate.splice(0,state.detailDate.length);
			state.txtPub.splice(0,state.txtPub.length);
			state.detailDate = [...state.detailDate,...action.detailDate];
			state.txtPub = [...state.txtPub,...action.detailDate[0].review]
			return Object.assign({}, state,{})
			

		case 'TIT_SEND' :
			state.fenSel.splice(0,state.fenSel.length);
			state.fenSel = [...state.fenSel,...action.fenSel];
			return Object.assign({}, state,{});
			
		case 'ADD_PUBLISH' :
			console.log(action.txtPub)
			state.txtPub = [...state.txtPub, action.txtPub];
			return Object.assign({}, state,{});

		case 'SHOU_CANG' :
			state.shouCang = [...state.shouCang, action.content];
			return Object.assign({}, state,{});

		default:
			return state;
			

	}
}
export default homeMenuReducer;