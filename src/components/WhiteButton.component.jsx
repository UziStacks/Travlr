import React from "react";

const WhiteButton = ({ text, styling }) => {
  const styles = {
    roundedFull:
      "bg-white text-black text-sm font-medium rounded-full px-4 py-1 shadow-md shadow-black",
    roundedXl: "bg-white text-black font-semibold rounded-xl mr-3 px-3 py-1",
    grayBtn: "bg-[#D9D9D9] mr-3 px-2 py-1 rounded-xl shadow-md shadow-gray-400",
  };

  return <button className={styles[styling]}>{text}</button>;
};

export default WhiteButton;
