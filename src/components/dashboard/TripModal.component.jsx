import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const TripModal = ({ tripModalToggle, handleTripModalToggle }) => {
  const styles = {
    container:
      "fixed flex flex-col items-center pt-10 top-0 left-0 h-screen w-full bg-white z-[100]",
    closeIcon: "self-end mx-8 mb-5 cursor-pointer",
    title: "text-3xl font-bold",
    header: "text-lg font-light my-5 w-[354px] text-center",
    locationContainer: "border-[1px] border-gray-400 my-4 px-2 py-3 rounded-lg",
    locatonlabel: "text-base font-semibold mr-2",
    locationInput: "placeholder:text-xs w-[200px]",
    dateContainer:
      "text-xs border-[1px] border-gray-400 my-4 px-2 py-2 rounded-lg",
    dateSubLabelContainer: "flex justify-between mr-5 mt-1",
    dateLabel: "font-semibold",
    dateSubLabel: "inline-flex item-center gap-1",
    button:
      "bg-[#EAEAEA] mt-2 px-3 py-2 rounded-full shadow-md shadow-gray-400",
  };
  const {
    container,
    closeIcon,
    title,
    header,
    locationContainer,
    locatonlabel,
    locationInput,
    dateContainer,
    dateSubLabelContainer,
    dateLabel,
    dateSubLabel,
    button,
  } = styles;
  return (
    tripModalToggle && (
      <div className={container}>
        <IoClose
          onClick={handleTripModalToggle}
          className={closeIcon}
          size={30}
        />
        <h1 className={title}>Plan a Trip</h1>
        <p className={header}>
          Start building out an an itinerary for your upcoming travel plans
        </p>
        <div>
          <div className={locationContainer}>
            <label className={locatonlabel}>Where to?</label>
            <input
              className={locationInput}
              type="text"
              placeholder="e.g. Toronto, Madrid, Tokyo"
            />
          </div>
          <div className={dateContainer}>
            <label className={dateLabel}>Dates</label>
            <div className={dateSubLabelContainer}>
              <p className={dateSubLabel}>
                <BsCalendar4Week />
                Start date
              </p>
              <p className={dateSubLabel}>
                <BsCalendar4Week />
                End date
              </p>
            </div>
            {/* <input type="date" id="start" name="trip-start" /> */}
          </div>
        </div>
        <button className={button}>Start planning</button>
      </div>
    )
  );
};

export default TripModal;
