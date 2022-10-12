import React from "react";
import { Spotlight, Trips, UserInfo } from "../components/profile/mobile";

const Profile = () => {
  const styles = {
    container: "pt-20",
  };
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <div className="mt-10 mx-8">
          <UserInfo />
        </div>
        <Trips />
        <Spotlight />
      </div>
    </>
  );
};

export default Profile;
