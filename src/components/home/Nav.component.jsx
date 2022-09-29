import React from "react";
import { Outlet } from "react-router-dom";

const Nav = ({ handleModalToggle }) => {
  return (
    <>
      <nav className="absolute w-full">
        <div className="flex justify-between text-white mx-6 mt-5">
          <a href="/" className="title text-[46px]">
            Travlr.
          </a>
          <button onClick={handleModalToggle}>Get started</button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
