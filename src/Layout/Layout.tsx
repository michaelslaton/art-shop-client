import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./home-page/HomePage";
import Error404 from "../utils/error404/Error404";
import "./layout.css";

const Layout: React.FC = () => {
  const [ lightsOn, setLightsOn ] = useState<boolean>(true);

  return (
    <div className={`main-screen ${lightsOn ? "" : "dark"}`}>
      <Navbar lights={lightsOn}/>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage lights={lightsOn}/>}/>
            <Route path="*" element={<Error404/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Layout;