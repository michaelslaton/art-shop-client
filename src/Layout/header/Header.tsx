import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import LightSwitchButton from "../components/LightSwitchButton/LightSwitchButton";
import Navbar from "./navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./header.css";

const Header: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const cartCount: number = useAppSelector((state)=> state.shoppingCart.cartInventory.length);
  const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn);

  return (
    <div className="header__container">
      <div className="header__upper">
        <h1 className="header__page-title">Art Shop Title</h1>
        <div>
          <div>
            <LightSwitchButton/>
            <button className={`header__cart-button ${ lightsOn ? "" : "dark" }`} onClick={()=>navigate("/shoppingcart")}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCount}
            </button>
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Header;