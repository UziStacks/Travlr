import React from "react";
import { BsPlus } from "react-icons/bs";

const PlanButton = ({ handleTripModalToggle, styling }) => {
  const styles = {
    mobile:
      "inline-flex items-center bg-[#EAEAEA] text-xs font-semibold px-3 py-[6px] mb-3 rounded-xl shadow-md shadow-gray-400",
    buttonIcon: "mb-[1px]",
    desktop:
      "inline-flex items-center bg-[#EAEAEA] text-xs font-semibold px-3 py-[6px] rounded-xl shadow-md shadow-gray-800",
  };

  const { buttonIcon } = styles;

  return (
    <button onClick={handleTripModalToggle} className={styles[styling]}>
      <BsPlus className={buttonIcon} size={20} /> Plan a new trip
    </button>
  );
};

export default PlanButton;
