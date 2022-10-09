import React from "react";

const WhiteButton = ({ text, rounded }) => {
  const styles = {
    btnVarOne:
      "bg-white text-black text-sm font-medium rounded-full px-4 py-1 shadow-md shadow-black",
    btnVarTwo: "bg-white text-black font-semibold rounded-xl px-4 py-2",
  };
  const { btnVarOne, btnVarTwo } = styles;

  return <button className={rounded ? btnVarOne : btnVarTwo}>{text}</button>;
};

export default WhiteButton;
