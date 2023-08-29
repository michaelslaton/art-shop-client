import { useAppSelector } from "../redux/hooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "./home-page/HomePage";
import Categories from "./categories/Categories";
import Error404 from "../utils/error404/Error404";
import "./layout.css";

const Layout: React.FC = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn);

  return (
    <div className={`main-screen ${lightsOn ? "" : "dark"}`}>
      <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/category/:category" element={<Categories/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Layout;