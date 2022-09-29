import { Swiper, SwiperSlide } from "swiper/react";
import { spain, italy, norway } from "../../assets/images";
import "swiper/css";
const PopularDestinations = () => {
  return (
    <div className="ml-8 mt-10">
      <h2>Popular Destinations</h2>
      <Swiper spaceBetween={50} slidesPerView={2.5} className="mt-2">
        <SwiperSlide>
          <div className="w-[138px] h-[137px] relative">
            <img
              src={italy}
              alt="italy"
              className="w-full h-full object-cover absolute rounded-md"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDestinations;
