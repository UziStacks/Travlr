import { toronto } from "../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Spotlight = () => {
  const styles = {
    container: "mt-8 ml-8",
    title: "text-3xl font-bold",
    swiper: "mt-2",
    img: "w-[220px] rounded-xl",
  };
  const { container, title, swiper, img } = styles;
  return (
    <div className={container}>
      <h1 className={title}>Spotlight</h1>
      <Swiper spaceBetween={10} slidesPerView={2.5} className={swiper}>
        <SwiperSlide>
          <img src={toronto} alt="" className={img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Spotlight;
