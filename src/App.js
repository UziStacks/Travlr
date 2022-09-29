import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, Profile } from "./pages";
import { Nav, Footer } from "./components/home";

function App() {
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
    <div className="App">
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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
