import { useAppSelector } from "../../redux/hooks";
import "./navbar.css";

const Navbar: React.FC = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn)

  return (
    <div className={`navbar__container bubble ${lightsOn ? "" : "dark"}`}>
      <ul className="navbar__buttons-wrapper">
        <li className={`navbar__button ${ lightsOn ? "" : "dark"}`}>By Artist</li>
        <li className={`navbar__button ${ lightsOn ? "" : "dark"}`}>By Category</li>
      </ul>
    </div>
  );
};

export default Navbar;