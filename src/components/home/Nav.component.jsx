import React from "react";

const Nav = () => {
  return (
    <nav className="absolute w-full">
      <div className="flex justify-between text-white mx-6 mt-5">
        <a href="/" className="title text-[46px]">
          Travlr.
        </a>
        <button>Get started</button>
      </div>
    </nav>
  );
};

export default Nav;
