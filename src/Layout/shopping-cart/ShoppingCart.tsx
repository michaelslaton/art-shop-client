import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { emptyCart } from "../../redux/slices/shoppingCartSlice";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartProduct } from "../../redux/slices/shoppingCartSlice";
import "./shoppingCart.css";

const ShoppingCart: React.FC = () => {
  const cart: CartProduct[] = useAppSelector((state)=> state.shoppingCart.cartInventory );
  const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn );
  const dispatch = useAppDispatch();

  const emptyCartHandler = (): void => {
    if (window.confirm("Are you sure you want to clear your cart?") === true) dispatch(emptyCart());
  };

  return (
    <>
      <div className="cart__items-wrapper">
        {cart.map((item, i)=>(
          <ShoppingCartItem key={i} item={item}/>
        ))}
        <div className="cart__buttons-wrapper">
          <button
            className={`button ${ lightsOn ? "" : "dark" }`}
            onClick={()=> emptyCartHandler()}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;