import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { listCategories } from "../../../utils/api/api";
import NavDropdown from "./nav-dropdown/NavDropdown";
import "./navbar.css";

const Navbar: React.FC = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn)
  const categories = listCategories();
  const navigate = useNavigate();


  return (
    <div className={`navbar__container bubble ${lightsOn ? "" : "dark"}`}>
      <button className={`navbar__button ${lightsOn ? "" : "dark"}`} onClick={()=> navigate("/")}>Home</button>
      <NavDropdown title="by Artist">
        <div className="navbar__dropdown-child--center">
          Heres a Link: Link!!!<br/>
          Heres a Link: Link!!!<br/>
          Heres a Link: Link!!!<br/>
        </div>
      </NavDropdown>
      <NavDropdown title="by Catagory">
        <div className="navbar__dropdown-child--center">
          {categories.map((category)=>(
            <button className={`navbar__dropdown-button ${lightsOn ? "" : "dark"}`} onClick={()=>navigate(`/${category}`)}>{category}</button>
          ))}
        </div>
      </NavDropdown>
    </div>
  );
};

export default Navbar;