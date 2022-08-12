import React from "react";
import dataGalery from "../dataGalery";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Galery = () => {
  return (
    <div
      name="galery"
      className="w-full h-full bg-gradient-to-tr from-gray-800 to-black text-gray-300 shadow-lg pt-8"
    >
      <div className="pb-8 pl-4">
        <p className="md:text-4xl text-2xl font-bold inline border-b-4 border-blue-700">
          Galery
        </p>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
        className="mySwiper"
      >
        {dataGalery.map((item) => (
          <SwiperSlide key={item.id} >
            <div className="border border-white rounded m-3">
              <img src={item.images} alt="kegiatan 1" className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Galery;
