import mockup from "../../assets/images/mockup.png";
import { AiFillApple } from "react-icons/ai";

const AppCTA = () => {
  return (
    <>
      <div className="lg:hidden text-center text-xl mt-14">
        <h3 className="px-14">Hey, We are available on the Appstore!</h3>
        <img
          src={mockup}
          alt="App mockup"
          width={255}
          className="mx-auto mt-6"
        />
        <h4 className="text-lg px-14">
          Available for iOs. Free to download now
        </h4>
        <button className="bg-black text-white px-3 py-2 mt-5 text-sm inline-flex rounded-full">
          <AiFillApple size={20} />
          App Store
        </button>
      </div>
      <div className="hidden lg:flex items-center justify-between bg-gradient-to-r from-[#333333] to-neutral-400 text-white h-[356px] px-16 mt-32 rounded-3xl">
        <div>
          <h3 className="text-4xl">
            Hey, We are available
            <br /> on the Appstore!
          </h3>
          <h4 className="mt-3">Available for iOs. Free to download now</h4>
          <button className="bg-black text-white px-3 py-2 mt-5 text-sm inline-flex rounded-full">
            <AiFillApple size={20} />
            App Store
          </button>
        </div>
        <img src={mockup} alt="App mockup" width={255} className="" />
      </div>
    </>
  );
};

export default AppCTA;
