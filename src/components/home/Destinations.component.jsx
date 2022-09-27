import DestinationCard from "./destinations/DestinationCard.component";

const Destinations = () => {
  return (
    <div className="text-center mt-14 overflow-hidden">
      <h4 className="capitalize text-base">A world ready to explore</h4>
      <h3 className="capitalize text-xl px-14">
        popular destinations by <span className="title text-2xl">travlr.</span>
      </h3>
      <DestinationCard />
    </div>
  );
};

export default Destinations;
