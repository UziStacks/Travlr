import React from "react";
import WhiteButton from "./WhiteButton.component";

const DestinationOptions = ({ styling }) => {
  return (
    <div className="text-sm">
      <WhiteButton text="Locations" styling={styling} />
      <button className="mr-3 py-1">Restaurants</button>
      <button className="mr-3 py-1">Hotels</button>
      <button className="mr-3 py-1">Attractions</button>
    </div>
  );
};

export default DestinationOptions;
