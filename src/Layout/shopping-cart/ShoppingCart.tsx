import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeFromCart } from "../../redux/slices/shoppingCartSlice";
import Product from "../../types/Product";
import "./shoppingCart.css";

const ShoppingCart: React.FC = () => {
  const cart: Product[] = useAppSelector((state)=> state.shoppingCart.cartInventory);
  const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn);

  return (
    <>
      {cart.map((item)=>(
        <>
          <img className="cart__item-image" alt={item.title} src={item.img}/>
        </>
      ))}
    </>
  );
};

export default ShoppingCart;