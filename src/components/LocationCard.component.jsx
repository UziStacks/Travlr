import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const LocationCard = () => {
  return (
    <div className="w-[170px] h-[250px] bg-white rounded-xl">
      <img
        className="w-full h-[200px] object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1594242505542-bca88a4076fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt=""
      />
      <p className="text-sm font-medium mt-1 ml-3">Jamaica Hotel</p>
      <p className="flex items-center text-xs ml-2">
        <IoLocationOutline /> Kingston, Jamaica
      </p>
    </div>
  );
};

export default LocationCard;
