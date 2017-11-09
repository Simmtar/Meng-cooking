"use strict";

import React from 'react';

class sugDate extends React.Component {
	componentDidMount(){
		// this.refs.sec.style.height = document.documentElement.clientHeight - this.refs.head.clientHeight + "px";
		var galleryTop = new Swiper('.gallery-top', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        effect: 'coverflow',
	        loop:false,
	        spaceBetween: 10,
	        slidesPerView: 'auto',
	        coverflow: {
	            rotate: 50,
	            stretch: 0,
	            depth: 100,
	            modifier: 1,
	            slideShadows : true
	        }
	    });
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
	        spaceBetween: 10,
	        // centeredSlides: true,
	        // loop:false,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;
	}
	render(){
		return (
			<div className="sugDate">
				<header ref="head">
					<b>×</b>
					<div>每日食谱建议</div>
				</header>
				
					<div className="gallery-top">
				        <div className="swiper-wrapper">
				            <div className="swiper-slide" >
				            	<img src="./img/cook/cook1.jpg" />
				            </div>
				            <div className="swiper-slide"><img src="./img/cook/cook1.jpg" /></div>
				            <div className="swiper-slide"><img src="./img/cook/cook1.jpg" /></div>
				            <div className="swiper-slide"><img src="./img/cook/cook1.jpg" /></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide" ></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				        </div>
				       {/*<div className="swiper-button-next swiper-button-white"></div>
				        <div className="swiper-button-prev swiper-button-white"></div>*/}
				    </div>
					 <div className="swiper-container gallery-thumbs">
				        <div className="swiper-wrapper">
				            <div className="swiper-slide"><img src="./img/cook/cook1.jpg" /></div>
				            <div className="swiper-slide"><img src="./img/cook/cook1.jpg" /></div>
				            <div className="swiper-slide"><img src="./img/cook/cook1.jpg" /></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				            <div className="swiper-slide"></div>
				        </div>
				    </div>
				
			</div>
		)
	}
}

export default sugDate;