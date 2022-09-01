import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Eventcard from "../Eventcard/Eventcard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Swipersection() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
                <SwiperSlide> <Eventcard /> </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Swipersection