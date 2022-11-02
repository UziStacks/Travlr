import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import UserInfo from "./profile/mobile/UserInfo.component";

const Profile = ({ profile, handleProfileToggle }) => {
  return (
    <div
      className={`${
        profile ? "right-[0] transition-all ease-in-out" : "right-[-100%]"
      } bg-[#668099] absolute w-[25%] h-full top-0 text-white transition-all ease-in-out duration-700 z-[100]`}
    >
      <TbLayoutSidebarLeftExpand
        onClick={handleProfileToggle}
        className="ml-7 mt-5 text-3xl text-black cursor-pointer"
      />
      <p className="my-5 ml-8">My Profile</p>
      <div className="mx-8">
        <UserInfo />
      </div>
    </div>
  );
};

export default Profile;
