import { Japan, profilepic } from "../../assets/images";
import { BsPlus } from "react-icons/bs";

const UpcomingTrips = ({ handleTripModalToggle }) => {
  const styles = {
    container: "flex flex-col items-center pt-24",
    button:
      "inline-flex items-center bg-[#EAEAEA] text-xs font-semibold px-3 py-[6px] mb-3 rounded-xl shadow-md shadow-gray-400",
    buttonIcon: "mb-[1px]",
    title: "mb-2",
    locationImg: "min-w-[340px] max-h-[180px] rounded-xl",
    subtitle: "mt-5",
    profileImg: "inline-block w-[36px] h-[36px] object-cover mr-1 rounded-full",
    date: "text-base",
  };

  const {
    container,
    button,
    buttonIcon,
    title,
    locationImg,
    subtitle,
    profileImg,
    date,
  } = styles;

  return (
    <div className={container}>
      <button onClick={handleTripModalToggle} className={button}>
        <BsPlus className={buttonIcon} size={20} /> Plan a new trip
      </button>
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
