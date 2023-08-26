import { useAppSelector } from "../../redux/hooks";
import LightSwitchButton from "../components/LightSwitchButton/LightSwitchButton";
import Navbar from "../navbar/Navbar";
import "./header.css";

const Header: React.FC = () => {
  // const lightsOn = useAppSelector((state)=>state.lights.lightsOn)
  const cartCount = useAppSelector((state)=>state.shoppingCart.cartInventory.length)

  return (
    <div className="header__container">
      <div className="header__upper">
        <h1 className="header__page-title">Art Shop Title</h1>
        <div>
          <LightSwitchButton/>
          <p className="header__cart">Cart {cartCount}</p>
        </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header;