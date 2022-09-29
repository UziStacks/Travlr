import { toronto } from "../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Trips = () => {
  const styles = {
    container: "mt-10 ml-8",
    buttonContainer:
      "flex justify-between text-base mr-8 pb-3 px-2 border-b-[1px] border-black",
    selectedButton:
      "bg-[#D9D9D9] ml-5 px-2 py-1 rounded-xl shadow-md shadow-gray-400",
    button: "mr-10 py-1",
    swiper: "mt-5",
    slide:
      "flex flex-col justify-end items-center relative max-w-[136px] h-[137px]",
    img: "absolute w-full h-full object-cover mix-blend-overlay rounded-xl",
    location: "text-white mb-3",
  };
  const {
    container,
    buttonContainer,
    selectedButton,
    button,
    swiper,
    slide,
    img,
    location,
  } = styles;
  return (
    <div className={container}>
      <div className={buttonContainer}>
        <button className={selectedButton}>Upcoming Trips</button>
        <button className={button}>Past Trips</button>
      </div>
      <Swiper spaceBetween={10} slidesPerView={2.5} className={swiper}>
        <SwiperSlide className={slide}>
          <img src={toronto} alt="Toronto skyline" className={img} />
          <p className={location}>Toronto</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trips;
