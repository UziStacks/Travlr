import {
  Carousel,
  PopularDestinations,
  UpcomingTrips,
  TripModal,
} from "../components/dashboard";

import Sidebar from "../components/dashboard/desktop/Sidebar.component";
import Searchbar from "../components/Searchbar.component";
import ProfileIcon from "../components/ProfileIcon.component";
import Greeting from "../components/Greeting.component";
import { BiRefresh } from "react-icons/bi";
import WhiteButton from "../components/WhiteButton.component";

const Dashboard = ({ handleTripModalToggle, tripModalToggle }) => {
  return (
    <>
      <div className="lg:hidden">
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
        <div className="w-full mx-5">
          <div className="flex justify-between  mt-5 w-full">
            <Searchbar />
            <ProfileIcon />
          </div>
          <Greeting />
          <div className="relative w-[542px] h-[289px] text-white ">
            <div className="w-full h-full">
              <div className="absolute bg-gradient-to-r from-black opacity-75 w-[542px] h-[289px] rounded-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-5 left-5">
              <p className="text-2xl font-semibold">Castelo dos Mouros </p>
              <p className="text-xl font-light">Sintra, Portugal</p>
            </div>
            <div className="absolute w-full bottom-5 left-5">
              <div className="flex gap-3">
                <WhiteButton text="Start" rounded={true} />
                <button className="flex items-center font-light">
                  <BiRefresh color="gray" /> Next Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
