import { useAppSelector } from "../../redux/hooks";
import "./navbar.css";

// type NavBarProps = {
//   lights: boolean;
// }

const Navbar: React.FC/*<NavBarProps>*/ = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn)

  return (
    <div className={`navbar__container bubble ${lightsOn ? "" : "dark"}`}>
      Navbar
    </div>
  );
};

export default Navbar;