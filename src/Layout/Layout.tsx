import { useAppSelector } from "../redux/hooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./home-page/HomePage";
import Error404 from "../utils/error404/Error404";
import LightSwitchButton from "./components/LightSwitchButton/LightSwitchButton";
import "./layout.css";

const Layout: React.FC = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn);

  return (
    <div className={`main-screen ${lightsOn ? "" : "dark"}`}>
      <Navbar/>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </Router>
      </div>
      <LightSwitchButton/>
    </div>
  );
};

export default Layout;