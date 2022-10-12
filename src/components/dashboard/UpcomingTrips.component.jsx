import { Japan, profilepic } from "../../assets/images";
import { BsPlus } from "react-icons/bs";
import PlanButton from "../PlanButton.component";

const UpcomingTrips = ({ handleTripModalToggle }) => {
  const styles = {
    container: "flex flex-col items-center pt-24",
    title: "mb-2",
    locationImg: "min-w-[340px] max-h-[180px] rounded-xl",
    subtitle: "mt-5",
    profileImg: "inline-block w-[36px] h-[36px] object-cover mr-1 rounded-full",
    date: "text-base",
  };

  const { container, title, locationImg, subtitle, profileImg, date } = styles;

  return (
    <div className={container}>
      <PlanButton
        handleTripModalToggle={handleTripModalToggle}
        styling="mobile"
      />
      <div>
        <h2 className={title}>Upcoming Trips</h2>
        <img src={Japan} alt="shinjuku" className={locationImg} />
        <h3 className={subtitle}>Trip to Shinjuku</h3>
        <div>
          <img src={profilepic} alt="profile" className={profileImg} />
          <small className={date}>• Sep 22 - 30</small>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTrips;
