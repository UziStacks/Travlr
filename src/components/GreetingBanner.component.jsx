import React from "react";
import { BiRefresh } from "react-icons/bi";
import Greeting from "./Greeting.component";
import WhiteButton from "./WhiteButton.component";

const GreetingBanner = () => {
  return (
    <>
      <div className="relative w-full h-[189px] 2xl:h-[259px] text-white ">
        <div className="w-full h-full">
          <div className="absolute bg-gradient-to-r from-black opacity-75 w-full h-[189px] 2xl:h-[259px] rounded-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="absolute top-5 left-5">
          <p className="text-2xl font-semibold">Castelo dos Mouros </p>
          <p className="text-xl font-light">Sintra, Portugal</p>
        </div>
        <div className="absolute w-full bottom-5 left-5">
          <div className="flex gap-3">
            <WhiteButton text="Start" styling="roundedFull" />
            <button className="flex items-center font-light">
              <BiRefresh color="gray" /> Next Location
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreetingBanner;
