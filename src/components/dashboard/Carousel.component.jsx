import { toronto } from "../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <div className="mt-10 ml-8">
      <div className="text-sm">
        <button className="bg-[#D9D9D9] mr-3 px-2 py-1 rounded-xl shadow-md shadow-gray-400">
          Locations
        </button>
        <button className="mr-3 py-1">Restaurants</button>
        <button className="mr-3 py-1">Hotels</button>
        <button className="mr-3 py-1">Attractions</button>
      </div>
      <Swiper spaceBetween={10} slidesPerView={2.5} className="mt-2">
        <SwiperSlide>
          <img src={toronto} alt="" className="w-[220px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={toronto} alt="" className="w-[220px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={toronto} alt="" className="w-[220px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={toronto} alt="" className="w-[220px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={toronto} alt="" className="w-[220px] rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
