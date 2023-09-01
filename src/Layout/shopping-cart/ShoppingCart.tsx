import { useAppSelector } from "../../redux/hooks";
import ShoppingCartItem from "./ShoppingCartItem";
import Product from "../../types/Product";
import "./shoppingCart.css";

const ShoppingCart: React.FC = () => {
  const cart: Product[] = useAppSelector<Product[]>((state)=> state.shoppingCart.cartInventory);
  // const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn);

  return (
    <>
      {cart.map((item)=>(
        <ShoppingCartItem item={item}/>
      ))}
    </>
  );
};

export default ShoppingCart;