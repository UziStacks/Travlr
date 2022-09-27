import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
