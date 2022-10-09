import { IoIosArrowDown } from "react-icons/io";
import { uziblue } from "../assets/images";

const ProfileIcon = () => {
  return (
    <div className="flex items-center self-start text-white">
      <div className="max-w-[60px] mr-2">
        <img src={uziblue} alt="" className="w-full rounded-full" />
      </div>
      <div>
        <div className="flex items-center">
          Bobward <IoIosArrowDown />
        </div>
        <p className="text-sm">Novice</p>
      </div>
    </div>
  );
};

export default ProfileIcon;
