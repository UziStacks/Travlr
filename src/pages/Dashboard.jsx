import React from "react";
import {
  Carousel,
  PopularDestinations,
  UpcomingTrips,
  TripModal,
} from "../components/dashboard";

const Dashboard = ({ handleTripModalToggle, tripModalToggle }) => {
  return (
    <div>
      <UpcomingTrips handleTripModalToggle={handleTripModalToggle} />
      <Carousel />
      <PopularDestinations />
      <TripModal
        tripModalToggle={tripModalToggle}
        handleTripModalToggle={handleTripModalToggle}
      />
    </div>
  );
};

export default Dashboard;
