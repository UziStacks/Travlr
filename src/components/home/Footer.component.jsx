import React from "react";
import {
  AiFillApple,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="mx-6 mt-14 py-8 border-y-[1px] border-black">
        <div className="flex justify-between items-center text-black">
          <a href="/" className="title text-[46px]">
            Travlr.
          </a>
          <div className="flex gap-3">
            <AiFillApple size={25} color="667085" />
            <AiOutlineInstagram size={25} color="667085" />
            <AiOutlineTwitter size={25} color="667085" />
            <RiFacebookCircleFill size={25} color="667085" />
          </div>
        </div>
        <ol className="font-light">
          <li className="text-lg py-2">About</li>
          <li className="text-lg py-2">Contact</li>
          <li className="text-lg py-2">Planner</li>
          <li className="text-lg py-2">Destinations</li>
        </ol>
      </div>
      <p className="text-center font-light my-5">
        Ⓒ 2022 <span className="title text-xl">Travlr.</span> | All Rights
        Reserved
      </p>
      <div className="h-[22px] gradient"></div>
    </footer>
  );
};

export default Footer;
