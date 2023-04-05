import React, { useRef, useState } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Pagination } from 'swiper';
import { useBoolean } from 'ahooks';

import img from './img.jpg';
import img2 from './img2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './_style.scss';

export const Swiper = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);
  const [cur, setCur] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'prev' | 'next' | ''>('');
  return (
    <div
      style={{
        height: '400px',
        width: '400px',
        backgroundImage: 'url(https://shp.qpic.cn/ishow/2735021709/1676597852_1265602313_32264_sProdImgNo_6.jpg/0)',
      }}
    >
      <p className={`${state ? 'animate__animated animate__bounce' : ''}`}>Effects：{JSON.stringify(state)}</p>
      <p className={`${state ? 'fadeInLeft' : ''}`}>Effects：{JSON.stringify(state)}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </button>
        <button type="button" onClick={setTrue}>
          Set true
        </button>
      </p>
      <SwiperReact
        pagination={true}
        className="mySwiper"
        // followFinger={false}
        // speed={0}
        loop
        autoplay={{
          delay: 1000,
          // false,不然手指摸了就不会滑了
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        watchSlidesProgress
        onSlidePrevTransitionStart={() => {
          console.log('上一张');
        }}
        onSlideNextTransitionStart={() => {
          console.log('下一张');
        }}
      >
        {
          [1, 2, 3, 4, 5].map((item, index) => (
            // fadeOutLeft
            // fadeInRight
            <SwiperSlide>
              <div className="swiper-item show">
                <img src={img2} alt="" />
                <div className="text">
                  {item}{item}{item}{item}{item}{item}{item}{item}{item}{item}
                </div>
                <div className="text">
                  {item}{item}{item}{item}{item}{item}{item}{item}{item}{item}
                </div>
                <div className="text">
                  {item}{item}{item}{item}{item}{item}{item}{item}{item}{item}
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </SwiperReact>
    </div>
  );
};

// progress: function() {
//   var swiper = this;
//   for (var i = 0; i < swiper.slides.length; i++) {
//     var slideProgress = swiper.slides[i].progress;
//     var innerOffset = swiper.width * interleaveOffset;
//     var innerTranslate = slideProgress * innerOffset;
//     swiper.slides[i].querySelector(".slide-inner").style.transform =
//       "translate3d(" + innerTranslate + "px, 0, 0)";
//   }
// },
// touchStart: function() {
//   var swiper = this;
//   for (var i = 0; i < swiper.slides.length; i++) {
//     swiper.slides[i].style.transition = "";
//   }
// },
// setTransition: function(speed) {
//   var swiper = this;
//   for (var i = 0; i < swiper.slides.length; i++) {
//     swiper.slides[i].style.transition = speed + "ms";
//     swiper.slides[i].querySelector(".slide-inner").style.transition =
//       speed + "ms";
//   }
// }

