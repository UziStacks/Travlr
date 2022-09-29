import React from "react";
import {
  Carousel,
  PopularDestinations,
  UpcomingTrips,
} from "../components/dashboard";

const Dashboard = () => {
  return (
    <div>
      <UpcomingTrips />
      <Carousel />
      <PopularDestinations />
    </div>
  );
};

export default Dashboard;
