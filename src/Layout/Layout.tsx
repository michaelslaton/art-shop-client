import { useAppSelector } from "../redux/hooks";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css";



const Layout: React.FC = () => {
  const lightsOn: boolean = useAppSelector((state)=>state.lights.lightsOn);

  return (
    <div className={`main-screen ${ lightsOn ? "" : "dark" }`}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;