import React from "react";
import { uziblue } from "../../assets/images";

const UserInfo = () => {
  return (
    <div className="mx-8">
      <h1 className="text-4xl font-bold">Terel Phillips</h1>
      <div className="flex mt-5">
        <div className="text-lg mt-2 mr-auto w-[205px]">
          <p>Located in Toronto, Ontario</p>
          <p className="text-base text-[#656565] font-medium">24 Year's old</p>
        </div>
        <div className="max-w-[142px] max-h-[142px]">
          <img
            src={uziblue}
            alt=""
            className="w-full rounded-full border-2 border-black shadow-md shadow-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
