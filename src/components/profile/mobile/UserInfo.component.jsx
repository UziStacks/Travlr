import React from "react";
import { uziblue } from "../../../assets/images";

const UserInfo = () => {
  const styles = {
    container: "mx-8 pt-14",
    name: "text-4xl font-bold",
    locationContainer: "flex mt-5",
    location: "text-lg mt-2 mr-auto w-[205px]",
    age: "text-base text-[#656565] font-medium",
    imgContainer: "max-w-[142px] max-h-[142px]",
    img: "w-full rounded-full border-2 border-black shadow-md shadow-gray-400",
  };
  const {
    container,
    name,
    locationContainer,
    location,
    age,
    imgContainer,
    img,
  } = styles;
  return (
    <div className={container}>
      <h1 className={name}>Terel Phillips</h1>
      <div className={locationContainer}>
        <div className={location}>
          <p>Located in Toronto, Ontario</p>
          <p className={age}>24 Year's old</p>
        </div>
        <div className={imgContainer}>
          <img src={uziblue} alt="" className={img} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
