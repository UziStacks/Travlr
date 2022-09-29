import React from "react";
import { Spotlight, Trips, UserInfo } from "../components/profile";

const Profile = () => {
  const styles = {
    container: "pt-20",
  };
  const { container } = styles;
  return (
    <div className={container}>
      <UserInfo />
      <Trips />
      <Spotlight />
    </div>
  );
};

export default Profile;
