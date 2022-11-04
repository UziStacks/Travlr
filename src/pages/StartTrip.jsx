import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsCalendar4Week } from "react-icons/bs";

const StartTrip = () => {
  const [destinations, setDestinations] = useState([]);
  const [userInput, setUserInput] = useState("");

  const filteredDestinations = destinations.filter((location) => {
    if (userInput === "") {
      return null;
    } else {
      return location.name.toLowerCase().startsWith(userInput.toLowerCase());
    }
  });

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const { data: countries } = await axios.get(
          "http://localhost:4000/api/destinations/countries/"
        );

        const { data: states } = await axios.get(
          "http://localhost:4000/api/destinations/states/"
        );

        const { data: cities } = await axios.get(
          "http://localhost:4000/api/destinations/cities/"
        );

        setDestinations([...countries, ...states, ...cities]);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchDestinations();
  }, []);
  const styles = {
    container: "flex flex-col items-center pt-10 w-full mx-80",
    title: "text-3xl font-bold",
    header: "text-lg font-light my-5 w-[354px] text-center",
    locationContainer:
      "border-[1px] border-gray-400 my-4 px-2 py-3 rounded-lg relative z-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent",
    locatonlabel: "text-base font-semibold mr-2",
    locationInput: "placeholder:text-xs w-[80%] bg-transparent outline-none",
    dateContainer:
      "text-xs border-[1px] border-gray-400 my-4 px-2 py-2 rounded-lg",
    dateSubLabelContainer: "flex justify-between mr-5 mt-1",
    dateLabel: "font-semibold",
    dateSubLabel: "inline-flex item-center gap-1",
    button:
      "bg-[#EAEAEA] mt-2 px-3 py-2 rounded-full shadow-md shadow-gray-400 hover:bg-gray-200 active:scale-90 transition duration-150",
  };
  const {
    container,
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
    <div className={container}>
      <h1 className={title}>Plan a Trip</h1>
      <p className={header}>
        Start building out an an itinerary for your upcoming travel plans
      </p>
      <div className="relative w-full">
        <div className={locationContainer}>
          <label className={locatonlabel}>Where to?</label>
          <input
            className={locationInput}
            type="text"
            placeholder="e.g. Toronto, Madrid, Tokyo"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div
          className={`${
            userInput ? "opacity-1 top-20 max-h-[300px]" : "opacity-0 top-0"
          }
          absolute w-full pl-2 rounded-lg border-[1px] border-gray-400 z-40 bg-white overflow-y-scroll transition-all duration-500`}
        >
          {!filteredDestinations.length ? (
            <p className="text-gray-400 py-4">
              No results found for{" "}
              <span className="font-semibold text-gray-600">"{userInput}"</span>
            </p>
          ) : (
            filteredDestinations
              .map((destination) => (
                <div className="py-3 cursor-pointer">
                  <p className="text-black">{destination.name}</p>
                  <p className="text-gray-500 text-xs font-semibold">
                    {destination.stateCode
                      ? `${destination.stateCode}, ${destination.countryCode}`
                      : destination.countryCode
                      ? "Province/State"
                      : "Country"}
                  </p>
                </div>
              ))
              .slice(0, 10)
          )}
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
        </div>
      </div>
      <button className={button}>Start planning</button>
    </div>
  );
};

export default StartTrip;
