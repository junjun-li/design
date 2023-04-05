import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Pagination } from 'swiper';
import img from './img.jpg';
import img2 from './img2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './_style.scss';
import $ from 'jquery';

let interleaveOffset = -.5;
export const Swiper2 = () => {

  return (
    <Swiper
      pagination={true}
      className="mySwiper"
      speed={1000}
      loop
      grabCursor={true}
      watchSlidesProgress
      onSlidePrevTransitionStart={(swiper) => {
        console.log('上一张');
      }}
      onSlideNextTransitionStart={(swiper) => {
        // 做滑动一点点, 然后消失
        console.log('下一张');
      }}
      onSlideChangeTransitionStart={() => {

      }}
      onProgress={(swiper) => {
        // for (var i = 0; i < swiper.slides.length; i++) {
        //   var slide = swiper.slides[i];
        //   var progress = slide.progress;
        //   var translate, innerTranslate;
        //   console.log('progress', progress);
        //   if (progress > 0) {
        //     translate = progress * swiper.width;
        //     innerTranslate = translate * interleaveOffset;
        //   } else {
        //     innerTranslate = Math.abs(progress * swiper.width) * interleaveOffset;
        //     translate = 0;
        //   }
        //   console.log('translate', translate);
        //   console.log('innerTranslate', innerTranslate);
        //   $(slide).css({
        //     transform: 'translate3d(' + translate + 'px,0,0)',
        //   });
        //
        //   $(slide).find('.slide-inner').css({
        //     transform: 'translate3d(' + innerTranslate + 'px,0,0)',
        //   });
        // }
      }}
      onTouchStart={(swiper) => {
        // debugger
        // for (var i = 0; i < swiper.slides.length; i++) {
        //   $(swiper.slides[i]).css({ transition: '' });
        // }
      }}
      onSetTransition={(swiper, speed) => {
        // for (var i = 0; i < swiper.slides.length; i++) {
        //   $(swiper.slides[i])
        //     .find('.slide-inner')
        //     .addBack()
        //     .css({ transition: speed + 'ms' });
        // }
      }}
    >
      <SwiperSlide>
        <div
          className="slide-inner"
          style={{
            backgroundImage: `url('https://shp.qpic.cn/ishow/2735032715/1679900644_1265602313_7293_sProdImgNo_6.jpg/0')`,
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide-inner"
          style={{
            backgroundImage: `url('https://shp.qpic.cn/ishow/2735032117/1679390015_1265602313_6984_sProdImgNo_6.jpg/0')`,
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide-inner"
          style={{
            backgroundImage: `url('https://shp.qpic.cn/ishow/2735020216/1675327480_1265602313_40242_sProdImgNo_6.jpg/0')`,
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};

