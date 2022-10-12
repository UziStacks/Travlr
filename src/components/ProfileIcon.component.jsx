import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { uziblue } from "../assets/images";

const ProfileIcon = ({ handleProfileToggle }) => {
  return (
    <div className="flex items-center self-start text-white">
      <div className="max-w-[60px] mr-2">
        <img src={uziblue} alt="" className="w-full rounded-full" />
      </div>
      <div>
        <div className="flex items-center">
          Bobward{" "}
          <TbLayoutSidebarRightExpand
            onClick={handleProfileToggle}
            className="cursor-pointer"
          />
        </div>
        <p className="text-sm">Novice</p>
      </div>
    </div>
  );
};

export default ProfileIcon;
