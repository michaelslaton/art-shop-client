import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeFromCart } from "../../redux/slices/shoppingCartSlice";
import { CartProduct } from "../../redux/slices/shoppingCartSlice";
import "./shoppingCart.css"

type ShoppingCartItemProps = {
  item: CartProduct;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
  const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn);
  const dispatch = useAppDispatch();
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const moneyFormat: Intl.NumberFormat = new Intl.NumberFormat("en-us", { currency: "USD" });

  return (
    <>
      <div className="cart__item-grid">

        <input type="checkbox" ref={checkBoxRef}/>

        <img className="cart__item-image" src={item.img} alt={item.title}/>

        <h3>{item.title}</h3>

        <div>
          <div> Quantity: {item.quantity} </div>
          <div>$ {moneyFormat.format(item.price)} </div>
        </div>

        <button 
          className={`button cart__item--delete-button ${ lightsOn ? "" : "dark" }`}
          onClick={()=> dispatch(removeFromCart(item.id))}>
            Remove
        </button>

      </div>
      <div className={`divider ${ lightsOn ? "" : "dark" }`}/>
    </>
  );
};

export default ShoppingCartItem;