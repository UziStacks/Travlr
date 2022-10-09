import { RiLayout3Fill } from "react-icons/ri";
import { BiArrowFromRight, BiArrowFromLeft } from "react-icons/bi";
import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  return (
    <nav
      className={`${
        sidebar ? "w-[80px]" : "w-[230px] pl-5"
      }  h-full text-white border-r-[1px] border-[#5C636A] transition-all duration-300 ease-in-out`}
    >
      <div
        className={`${
          sidebar ? "justify-center pt-5" : "justify-between"
        } flex items-center`}
      >
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
          } text-2xl p-1 hover:shadow-md  shadow-black rounded-md cursor-pointer ease-in-out`}
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
          sidebar ? "items-center" : ""
        } flex flex-col gap-5 text-2xl mt-5`}
      >
        <li className="flex items-center">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Dashboard</div>
        </li>
        <li className="flex items-center">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Dashboard</div>
        </li>
        <li className="flex items-center">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Dashboard</div>
        </li>

        <li className="absolute bottom-5 flex items-center">
          <RiLayout3Fill color="#101828" />
          <div className={`${sidebar ? "hidden" : "block"} `}>Dashboard</div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
