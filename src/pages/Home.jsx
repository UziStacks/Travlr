import {
  Header,
  Content,
  Destinations,
  AppCTA,
  LoginModal,
  Footer,
} from "../components/home";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = ({ modalToggle, handleModalToggle }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated === true ? (
        navigate("/dashboard")
      ) : (
        <div className="">
          <LoginModal
            modalToggle={modalToggle}
            handleModalToggle={handleModalToggle}
          />
          <Header />
          <Content />
          <Destinations />
          <AppCTA />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
