import React from "react";
import spain from "../../../assets/images/spain.png";
import { IoLocationOutline } from "react-icons/io5";

const DestinationCard = () => {
  return (
    <div className="flex mt-7">
      <div className="flex flex-col items-center h-[272px] w-[219px] ml-8 bg-white text-white rounded-xl lg:ml-0">
        <img
          src={spain}
          alt="Spanish Castle"
          className="w-[172px] h-[171px] mt-5 rounded-lg shadow-stone-600 shadow-lg"
        />
        <div className="mt-3">
          <p className="text-xl text-black">Landmark</p>
          <small className="flex items-center text-[#676767]">
            <IoLocationOutline />
            Spain
          </small>
        </div>
      </div>
      <div className="flex flex-col items-center h-[272px] w-[219px] ml-8 bg-white text-white rounded-xl">
        <img
          src={spain}
          alt="Spanish Castle"
          className="w-[172px] h-[171px] mt-5 rounded-lg shadow-stone-600 shadow-lg"
        />
        <div className="mt-3">
          <p className="text-xl text-black">Landmark</p>
          <small className="flex items-center text-[#676767]">
            <IoLocationOutline />
            Spain
          </small>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
