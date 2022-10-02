import DestinationCard from "./destinations/DestinationCard.component";

const Destinations = () => {
  return (
    <div className="text-center mt-14 lg:mt-32 overflow-hidden">
      <div className="lg:flex flex-row-reverse justify-end items-center gap-14">
        <div className="lg:text-left ">
          <h4 className="capitalize text-base md:text-2xl md:font-semibold lg:mb-5">
            A world ready to explore
          </h4>
          <p className="hidden lg:block tracking-widest font-medium">
            These are some of the top tourist
            <br /> destinations today. Get started on your
            <br /> vaction today!
          </p>
        </div>
        <div className="hidden lg:block bg-black w-[1.5px] h-16"></div>
        <h3 className="capitalize text-xl px-14 md:text-2xl lg:px-0 lg:text-5xl lg:text-left ">
          popular destinations by <br className="hidden lg:block" />
          <span className="title text-3xl lg:text-6xl">Travlr.</span>
        </h3>
      </div>
      <DestinationCard />
    </div>
  );
};

export default Destinations;
