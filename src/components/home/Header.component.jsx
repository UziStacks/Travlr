import React from "react";
import waves from "../../assets/videos/Waves - 70796.mp4";

const Header = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-[-1]"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src={waves}
        // autoPlay
        loop
        muted
        type="video/mp4"
      />
      <div className="flex flex-col items-center capitalize text-center gap-3">
        <h2 className="font-extralight text-lg lg:text-4xl 2xl:text-5xl">
          plan your trip now
        </h2>
        <h1 className="font-semibold text-lg lg:text-4xl 2xl:text-5xl">
          So you can experience tommorrow's
          <br /> adventures
        </h1>
        <button className="lg:hidden bg-black text-xs px-3 py-2 rounded-full">
          Start Planning
        </button>

        {/* <div className="hidden lg:flex justify-between items-center gap-5 bg-neutral-800 bg-opacity-50 backdrop-blur pl-6 h-16 mt-5  rounded-full ">
          <div className="text-left">
            <p className="text-sm text-black">Choose a location</p>
            <button className="text-[0.9rem]">Los Angeles, California</button>
          </div>
          <div className="bg-black w-[1px] h-9 mx-3"></div>
          <div className="text-left">
            <p className="text-sm text-black">Choose a location</p>
            <button className="text-[0.9rem]">Los Angeles, California</button>
          </div>
          <div className="bg-black w-[1px] h-9 mx-3"></div>
          <button className="h-[3.8rem] bg-black text-xs px-3 py-2 rounded-full">
            Start Planning
          </button>
        </div> */}

        <button className="hidden lg:block bg-black text-lg px-5 py-2 mt-1 rounded-full">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default Header;
