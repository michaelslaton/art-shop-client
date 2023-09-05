import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { emptyCart } from "../../redux/slices/shoppingCartSlice";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartProduct } from "../../redux/slices/shoppingCartSlice";
import "./shoppingCart.css";

const ShoppingCart: React.FC = () => {
  const cart: CartProduct[] = useAppSelector((state)=> state.shoppingCart.cartInventory );
  const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn );
  const dispatch = useAppDispatch();

  return (
    <>
      {cart.map((item, i)=>(
        <ShoppingCartItem key={i} item={item}/>
      ))}
      <button
        className={`button ${ lightsOn ? "" : "dark" }`}
        onClick={()=> dispatch(emptyCart())}>Clear Cart</button>
    </>
  );
};

export default ShoppingCart;