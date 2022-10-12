import {
  Carousel,
  PopularDestinations,
  UpcomingTrips,
  TripModal,
} from "../components/dashboard";

import Sidebar from "../components/dashboard/desktop/Sidebar.component";
import Searchbar from "../components/Searchbar.component";
import ProfileIcon from "../components/ProfileIcon.component";
import LocationCard from "../components/LocationCard.component";
import DestinationOptions from "../components/DestinationOptions.component";
import Calender from "../components/Calender.component";
import GreetingBanner from "../components/GreetingBanner.component";
import Greeting from "../components/Greeting.component";
import PlanButton from "../components/PlanButton.component";
import Profile from "../components/Profile.component";
import { useState } from "react";
import { Nav } from "../components/home";

const Dashboard = ({
  handleTripModalToggle,
  tripModalToggle,
  handleModalToggle,
}) => {
  const [profile, setProfile] = useState(false);
  const handleProfileToggle = () => {
    setProfile(!profile);
  };
  return (
    <>
      <div className="lg:hidden">
        <Nav handleModalToggle={handleModalToggle} />
        <UpcomingTrips handleTripModalToggle={handleTripModalToggle} />
        <Carousel />
        <PopularDestinations />
        <TripModal
          tripModalToggle={tripModalToggle}
          handleTripModalToggle={handleTripModalToggle}
        />
      </div>
      <div className="hidden lg:flex w-screen h-screen bg-[#394856]">
        <Sidebar />
        <div className="dashboard w-full overflow-y-scroll overflow-x-hidden mx-5 2xl:px-24 2xl:mx-0">
          <div className="flex justify-between mt-5 w-full">
            <Searchbar />
            <ProfileIcon handleProfileToggle={handleProfileToggle} />
          </div>
          <div className="flex items-center justify-between">
            <Greeting />
            <PlanButton styling="desktop" />
          </div>
          <GreetingBanner />
          <div className="flex justify-between mt-3 2xl:mt-10">
            <div>
              <div className="mb-3 2xl:mb-5">
                <DestinationOptions styling="roundedXl" />
              </div>
              <div className="flex gap-x-3">
                <LocationCard />
                <LocationCard />
                <LocationCard />
              </div>
            </div>
            <Calender />
          </div>
        </div>
      </div>
      <Profile handleProfileToggle={handleProfileToggle} profile={profile} />
    </>
  );
};

export default Dashboard;
