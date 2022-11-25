import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Home = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    
      return (
        <>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-secondary">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 4</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 5</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 6</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 7</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 8</SwiperSlide>
            <SwiperSlide className="bg-secondary">Slide 9</SwiperSlide>
          </Swiper>
        </>
    );
};

export default Home;