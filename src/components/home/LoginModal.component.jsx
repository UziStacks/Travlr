import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ modalToggle, handleModalToggle }) => {
  const navigate = useNavigate();
  const handleLogInWithEmail = () => {
    navigate("/signin");
    handleModalToggle();
  };

  const styles = {
    modalContainer:
      "absolute top-0 left-0 mx-auto w-full flex justify-center z-[100]",
    modalSubContainer: "bg-white w-[300px] py-10 rounded-lg mt-[5vh] ",
    modalTitle: "title text-4xl mx-[55px] mt-2",
    modalSubtitle: "text-xl w-[230px] ml-[55px] my-5",
    buttonContainer: "flex flex-col mx-[55px] mb-8 font-light",
    button:
      "flex w-[190px] pl-3 py-2 my-[0.35rem] bg-[#626262] text-[13px] text-white rounded-lg",
    button2:
      "flex w-[190px] pl-3 py-2 my-[0.35rem] items-center bg-[#626262] text-[13px] text-white rounded-lg",
    policyText: "text-[9px] mx-2 mt-3 text-center",
    closeIcon: "float-right mr-[55px] text-xl cursor-pointer",
  };
  const {
    modalContainer,
    modalSubContainer,
    modalTitle,
    modalSubtitle,
    buttonContainer,
    button,
    button2,
    policyText,
    closeIcon,
  } = styles;
  return (
    modalToggle && (
      <div className={modalContainer}>
        <div
          onClick={handleModalToggle}
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-30 z-[-1]"
        ></div>
        <div className={modalSubContainer}>
          <IoClose onClick={handleModalToggle} className={closeIcon} />
          <h1 className={modalTitle}>Travlr.</h1>
          <p className={modalSubtitle}>
            Sign in to start planning with{" "}
            <span className="title">Travlr.</span>
          </p>
          <div className={buttonContainer}>
            <button className={button}>
              <AiFillApple className="mr-1 mt-[2px]" /> Continue with Apple
            </button>
            <button className={button2}>
              <RiFacebookCircleFill className="mr-1" /> Continue with Facebook
            </button>
            <button className={button2}>
              <AiOutlineGoogle className="mr-1" /> Continue with Google
            </button>
            <button onClick={handleLogInWithEmail} className={button2}>
              <MdEmail className="mr-1" /> Continue with Email
            </button>
          </div>
          <p className={policyText}>
            By proceeding, you agree to our{" "}
            <span className="underline font-semibold">Terms of Use</span> and
            confirm you have read our{" "}
            <span className="underline font-semibold">
              Privacy and Cookie Statement
            </span>
            .
          </p>
          <p className={policyText}>
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline font-semibold">
              Google Privacy Policy
            </span>
            and{" "}
            <span className="underline font-semibold">Terms of Service</span>{" "}
            apply.
          </p>
        </div>
      </div>
    )
  );
};

export default LoginModal;
