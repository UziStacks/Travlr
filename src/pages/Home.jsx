import {
  Header,
  Content,
  Destinations,
  AppCTA,
  LoginModal,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
