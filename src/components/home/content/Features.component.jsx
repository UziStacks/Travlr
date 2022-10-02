import { BsCalendar4Week } from "react-icons/bs";

const Features = () => {
  const styles = {
    container:
      "bg-[#4D4D4D] text-white mx-8 mt-7 px-10 pt-10 pb-14 max-w-lg md:mx-0 lg:max-w-[327px] rounded-lg",
    icon: "flex justify-center items-center bg-[#D9D9D9] text-black w-10 h-10 mx-auto mb-6 rounded-full",
    text: "text-xs min-w-[150px] lg:min-w-[200px]",
  };

  const { container, icon, text } = styles;
  return (
    <div className={container}>
      <div className={icon}>
        <BsCalendar4Week />
      </div>
      <p className={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate eget
        mauris molestie id cursus. Magna lacus, tortor eleifend ut mi id ut vel
        viverra.
      </p>
    </div>
  );
};

export default Features;
