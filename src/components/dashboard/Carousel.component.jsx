import { toronto } from "../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DestinationOptions from "../DestinationOptions.component";

const Carousel = () => {
  return (
    <div className="mt-10 ml-8">
      <DestinationOptions styling="grayBtn" />
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
