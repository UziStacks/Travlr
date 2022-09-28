import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  Nav,
  Header,
  Content,
  Destinations,
  AppCTA,
  Footer,
  LoginModal,
} from "../components/home";

const Home = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
    if (modalToggle) {
      enableBodyScroll(document.body);
    } else {
      disableBodyScroll(document.body);
    }
  };
  return (
    <div>
      <Nav handleModalToggle={handleModalToggle} />
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
