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

  const getTotal = (): string => {
    let total: number = 0;
    const moneyFormat: Intl.NumberFormat = new Intl.NumberFormat("en-us", { currency: "USD" });
    for(let i: number=0;i<cart.length;i++){
      if(cart[i].quantity) total+= cart[i].price * cart[i].quantity;
      else total+= cart[i].price;
    };
    return moneyFormat.format(total);
  };

  return (
      <div className="cart__items-wrapper">
        
        {cart.map((item, i)=>(
          <ShoppingCartItem key={i} item={item}/>
        ))}

        { getTotal() !== "0" &&
          <>
            <div className="cart__total">Total: ${getTotal()}</div>
            <div className="cart__buttons-wrapper">
              <button
                className={`button ${ lightsOn ? "" : "dark" }`}
                onClick={()=>{}}>
                Checkout
              </button>
              <button
                className={`button ${ lightsOn ? "" : "dark" }`}
                onClick={()=> emptyCartHandler()}>
                Clear Cart
              </button>
            </div>
          </>
        }
      </div>
  );
};

export default ShoppingCart;