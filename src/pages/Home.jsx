import React from "react";
import {
  Nav,
  Header,
  Content,
  Destinations,
  AppCTA,
  Footer,
} from "../components/home";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content />
      <Destinations />
      <AppCTA />
      <Footer />
    </div>
  );
};

export default Home;
