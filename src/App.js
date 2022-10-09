import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, Profile } from "./pages";
import { Nav } from "./components/home";

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const [tripModalToggle, setTripModalToggle] = useState(false);
  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
    if (modalToggle) {
      enableBodyScroll(document.body);
    } else {
      disableBodyScroll(document.body);
    }
  };
  const handleTripModalToggle = () => {
    setTripModalToggle(!tripModalToggle);
    if (tripModalToggle) {
      enableBodyScroll(document.body);
    } else {
      disableBodyScroll(document.body);
    }
  };
  return (
    <div className="App lg:flex justify-center md:max-w-[1440px] md:mx-auto">
      <Routes>
        <Route path="/" element={<Nav handleModalToggle={handleModalToggle} />}>
          <Route
            index
            element={
              <Home
                modalToggle={modalToggle}
                handleModalToggle={handleModalToggle}
              />
            }
          />

          <Route path="profile" element={<Profile />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <div>
              <Dashboard
                tripModalToggle={tripModalToggle}
                handleTripModalToggle={handleTripModalToggle}
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
