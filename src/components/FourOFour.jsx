import React from "react";
import { fourOFour } from "../assets/images";

const FourOFour = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${fourOFour}")`,
  };
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed bg-gray-100 404-image"
      style={backgroundImageStyle}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold">404 Page Not Found</h1>
        <h2 className="text-2xl font-bold">
          The page you are looking for does not exist
        </h2>
        <button className="bg-black text-white font-bold py-2 px-4 rounded">
          <a href="/">Go Home</a>
        </button>
      </div>
    </div>
  );
};

export default FourOFour;
