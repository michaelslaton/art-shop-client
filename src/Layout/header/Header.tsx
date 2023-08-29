import { useAppSelector } from "../../redux/hooks";
import LightSwitchButton from "../components/LightSwitchButton/LightSwitchButton";
import Navbar from "./navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./header.css";

const Header: React.FC = () => {
  // const lightsOn = useAppSelector((state)=>state.lights.lightsOn)
  const cartCount = useAppSelector((state)=>state.shoppingCart.cartInventory.length);

  return (
    <div className="header__container">
      <div className="header__upper">
        <h1 className="header__page-title">Art Shop Title</h1>
        <div>
          <p className="header__cart">
            <LightSwitchButton/>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount}
          </p>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Header;