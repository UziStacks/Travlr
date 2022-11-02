import { useContext, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, Profile, SignUp, SignIn } from "./pages";
import { Nav } from "./components/home";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";
import FourOFour from "./components/FourOFour";

axios.defaults.withCredentials = true;

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const [tripModalToggle, setTripModalToggle] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
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

          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
        {isAuthenticated ? (
          <Route
            path="dashboard"
            element={
              <div>
                <Dashboard
                  tripModalToggle={tripModalToggle}
                  handleTripModalToggle={handleTripModalToggle}
                  handleModalToggle={handleModalToggle}
                />
              </div>
            }
          />
        ) : (
          <Route path="dashboard" element={<SignIn />} />
        )}
        {isAuthenticated ? (
          <Route path="signup" element={<Dashboard />} />
        ) : (
          <Route path="signup" element={<SignUp />} />
        )}
        {isAuthenticated ? (
          <Route path="signin" element={<Dashboard />} />
        ) : (
          <Route path="signin" element={<SignIn />} />
        )}
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
