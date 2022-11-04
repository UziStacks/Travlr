import React from "react";
import { Japan, profilepic } from "../assets/images";
import { BsCalendar4Week } from "react-icons/bs";

const TripPlanner = () => {
  const styles = {
    backgroundImage: `url(${Japan})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "14rem",
    width: "100vw",
  };

  return (
    <div>
      <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={styles}
      >
        <div className="absolute left-20 right-20 top-24 flex flex-col justify-between bg-white h-48 rounded-lg">
          <h1 className="text-3xl font-bold text-center pt-10">
            Trip to Japan
          </h1>
          <div className="flex items-center justify-between mx-14 mb-4">
            <div className="flex items-center gap-2">
              <BsCalendar4Week />
              <p>11/11 - 12/11</p>
            </div>
            <img
              src={profilepic}
              alt="profilepic"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
      <div>
        {/* //Notes */}
        <div className="mt-20 mx-20">
          <h1 className="text-3xl font-bold">Notes</h1>
          <p className="text-lg font-light my-5">
            Add notes to your trip to help you remember important details
          </p>
          <div className="border-[1px] w-[50%] border-gray-400 my-4 px-2 py-3 rounded-lg relative z-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <label className="text-base font-semibold mr-2">Notes</label>
            <input
              className="placeholder:text-xs w-[80%] bg-transparent outline-none"
              type="text"
              placeholder="e.g. Toronto, Madrid, Tokyo"
            />
          </div>

          <button className="bg-[#EAEAEA] mt-2 px-3 py-2 rounded-full shadow-md shadow-gray-400 hover:bg-gray-200 active:scale-90 transition duration-150">
            Add Note
          </button>
        </div>
      </div>
      <div>
        {/* //Add places */}
        <div className="mt-20 mx-20">
          <h1 className="text-3xl font-bold">Add Places</h1>
          <p className="text-lg font-light my-5">
            Add places to your trip to help you remember important details
          </p>
          <div className="border-[1px] w-[50%] border-gray-400 my-4 px-2 py-3 rounded-lg relative z-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <label className="text-base font-semibold mr-2">Add Places</label>
            <input
              className="placeholder:text-xs w-[80%] bg-transparent outline-none"
              type="text"
              placeholder="e.g. Toronto, Madrid, Tokyo"
            />
          </div>

          <button className="bg-[#EAEAEA] mt-2 px-3 py-2 rounded-full shadow-md shadow-gray-400 hover:bg-gray-200 active:scale-90 transition duration-150">
            Add Place
          </button>
        </div>
      </div>
      <div className="pb-20">
        {/* // Itinerary */}
        <div className="mt-20 mx-20">
          <h1 className="text-3xl font-bold">Itinerary</h1>
          <p className="text-lg font-light my-5">
            Add places to your trip that you might want to visit
          </p>
          <div>
            <h3 className="text-lg font-semibold">Friday, 11/11</h3>
            <h4 className="text-sm font-semibold text-gray-500">
              add subtitle
            </h4>

            <div className="border-[1px] w-[50%] border-gray-400 my-4 px-2 py-3 rounded-lg relative z-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
              <label className="text-base font-semibold mr-2">Add Places</label>
              <input
                className="placeholder:text-xs w-[80%] bg-transparent outline-none"
                type="text"
                placeholder="e.g. Toronto, Madrid, Tokyo"
              />
            </div>

            <button className="bg-[#EAEAEA] mt-2 px-3 py-2 rounded-full shadow-md shadow-gray-400 hover:bg-gray-200 active:scale-90 transition duration-150">
              Add Place
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Saturday, 12/11</h3>
            <h4 className="text-sm font-semibold text-gray-500">
              add subtitle
            </h4>

            <div className="border-[1px] w-[50%] border-gray-400 my-4 px-2 py-3 rounded-lg relative z-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
              <label className="text-base font-semibold mr-2">Add Places</label>
              <input
                className="placeholder:text-xs w-[80%] bg-transparent outline-none"
                type="text"
                placeholder="e.g. Toronto, Madrid, Tokyo"
              />
            </div>

            <button className="bg-[#EAEAEA] mt-2 px-3 py-2 rounded-full shadow-md shadow-gray-400 hover:bg-gray-200 active:scale-90 transition duration-150">
              Add Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
