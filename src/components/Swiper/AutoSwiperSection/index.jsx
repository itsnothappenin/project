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
import { useEffect } from "react";


function AutoSwiperSection() {
  const [swipers, setSwipers] = useState([]);
  useEffect(() => {
    fetch("api/v1").then(res => res.json()).then(data => setSwipers(data))
  })
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
        {
          swipers.map(swiper => {
            <Swiper swiper={swiper} />
          })
        }
      </Swiper>
    </>
  );
}

export default AutoSwiperSection