import {
  Header,
  Content,
  Destinations,
  AppCTA,
  LoginModal,
} from "../components/home";

const Home = ({ modalToggle, handleModalToggle }) => {
  return (
    <div>
      <LoginModal
        modalToggle={modalToggle}
        handleModalToggle={handleModalToggle}
      />
      <Header />
      <Content />
      <Destinations />
      <AppCTA />
    </div>
  );
};

export default Home;
