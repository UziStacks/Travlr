import React from "react";
import waves from "../../assets/videos/Waves - 70796.mp4";

const Header = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[-1]"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src={waves}
        // autoPlay
        loop
        muted
        type="video/mp4"
      />
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-extralight">plan your trip now</h2>
        <h1 className="font-semibold text-center">
          So you can experience tommorrow's adventures
        </h1>
        <button className="bg-black text-xs px-3 py-2 rounded-full">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default Header;
