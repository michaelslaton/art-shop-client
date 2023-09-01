import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeFromCart } from "../../redux/slices/shoppingCartSlice";
import Product from "../../types/Product";
import "./shoppingCart.css"

type ShoppingCartItemProps = {
  item: Product;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
  const lightsOn: boolean = useAppSelector((state)=> state.lights.lightsOn);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="cart__item-grid">

        <input type="checkbox"/>

        <img className="cart__item-image" src={item.img} alt={item.title}/>

        <div>
        </div>

        <button 
          className={`button cart__item-delete-button ${ lightsOn ? "" : "dark" }`}
          onClick={()=> dispatch(removeFromCart(item.id))}>
            Remove
        </button>

      </div>
      <div className={`divider ${ lightsOn ? "" : "dark" }`}/>
    </>
  )
};

export default ShoppingCartItem;