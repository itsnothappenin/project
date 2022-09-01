import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Ucard from "../../UpcomingEvents/UCard/Ucard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";
import { Autoplay, Pagination, Navigation } from "swiper";


function AutoSwiperSection() {
    return (
      <>
        <Swiper
          // slidesPerView={2}
          // slidesPerGroup={2}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
              <SwiperSlide> <Ucard /> </SwiperSlide>
        </Swiper>
      </>
    );
  }

  export default AutoSwiperSection