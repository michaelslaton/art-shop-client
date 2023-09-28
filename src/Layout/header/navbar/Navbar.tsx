import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { listCategories, listArtists } from "../../../utils/api/api";
import NavDropdown from "./nav-dropdown/NavDropdown";
import "./navbar.css";

const Navbar: React.FC = () => {
  const lightsOn: boolean = useAppSelector((state)=>state.lights.lightsOn)
  const artists = listArtists();
  const categories: string[] = listCategories();
  const navigate: NavigateFunction = useNavigate();

  console.log(artists)


  return (
    <div className={`navbar__container bubble ${lightsOn ? "" : "dark" }`}>
      <button className={`navbar__button ${lightsOn ? "" : "dark" }`} onClick={()=> navigate("/")}>Home</button>
      <NavDropdown title="by Artist">
        <div className="navbar__dropdown-child--center">
          {artists.map((artist,i)=>(
            <button key={i} className={`navbar__dropdown-button ${lightsOn ? "" : "dark"}`} onClick={()=>navigate(`/artist/${artist.id}`)}>{artist.name}</button>
          ))}
        </div>
      </NavDropdown>
      <NavDropdown title="by Catagory">
        <div className="navbar__dropdown-child--center">
          {categories.map((category,i)=>(
            <button key={i} className={`navbar__dropdown-button ${lightsOn ? "" : "dark"}`} onClick={()=>navigate(`/category/${category}`)}>{category}</button>
          ))}
        </div>
      </NavDropdown>
    </div>
  );
};

export default Navbar;