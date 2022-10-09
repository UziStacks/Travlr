import React from "react";

const Searchbar = () => {
  return (
    <div className="flex items-center h-12 pl-5 bg-[#5E6364] rounded-full">
      <input
        className="max-w-[260px] bg-transparent placeholder:text-xs"
        type="text"
        placeholder="Search for your favourite destinations"
      />
      <button className="bg-[#272D32] h-full px-10 rounded-full text-white text-[.6rem]">
        search
      </button>
    </div>
  );
};

export default Searchbar;
