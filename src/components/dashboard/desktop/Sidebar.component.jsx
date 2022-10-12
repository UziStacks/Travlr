import { RiLayout3Fill } from "react-icons/ri";
import { BiArrowFromRight } from "react-icons/bi";
import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  return (
    <nav
      className={`${
        sidebar ? "w-[80px]" : "w-[20%]"
      } flex flex-col items-center h-full text-white border-r-[1px] border-[#5C636A] transition-all duration-300 ease-in-out`}
    >
      <div className={`${sidebar ? "pt-5" : ""} flex items-center gap-10`}>
        <a
          href="/"
          className={`${sidebar ? "hidden" : "block"} title text-[46px]`}
        >
          Travlr.
        </a>
        <i
          onClick={toggleSidebar}
          className={`${
            sidebar ? "" : "mr-3"
          } ml-auto text-2xl p-1 hover:shadow-md  shadow-black rounded-md cursor-pointer ease-in-out`}
        >
          <BiArrowFromRight
            className={`${
              sidebar ? "rotate-180" : ""
            } transition-all duration-500 ease-in-out`}
          />
        </i>
      </div>
      <ul
        className={`${
          sidebar ? "" : ""
        } flex flex-col gap-10 2xl:gap-5 text-2xl mt-5 h-full`}
      >
        <li className="flex items-center cursor-pointer">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Dashboard</div>
        </li>
        <li className="flex items-center cursor-pointer">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Trips</div>
        </li>
        <li className="flex items-center cursor-pointer">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Friends</div>
        </li>
      </ul>
      <li className="flex items-center cursor-pointer w-[158.08px] 2xl:gap-5 text-2xl mb-5">
        <RiLayout3Fill color="#101828" />
        <div className={`${sidebar ? "hidden" : "block"} `}>Logout</div>
      </li>
    </nav>
  );
};

export default Sidebar;
