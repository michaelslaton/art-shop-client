import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/slices/shoppingCartSlice";
import Product from "../../../types/Product";
import "./item.css";

type ItemPopupProps = {
  item: Product;
  popup: boolean;
  setPopup: Function;
};

const ItemPopup: React.FC<ItemPopupProps> = ({ item, popup, setPopup }) => {
  const lightsOn: boolean = useAppSelector((state)=>state.lights.lightsOn);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={`item__popup  ${popup ? "active" : ""} ${ lightsOn ? "" : "dark" }`}>
        <div className="item__popup--grid">
          <img className="item__popup--image" src={item.img} alt={item.title} />
          <div className="item__popup--info">
            <div className="item__popup--info-top">
              <h2 className="item__popup--title">{item.title}</h2>
              <button
                className={`item__popup--close-button ${ lightsOn ? "" : "dark" }`}
                onClick={() => setPopup(false)}>
                X
              </button>
            </div>
            <div>{`$${item.price}`}</div>
            <article>{item.description}</article>
            <div className="item__popup--info-bottom">
              <button
                className="button"
                onClick={() => {
                  dispatch(addToCart(item));
                  setPopup(false);
                }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`item__popup--black-screen ${ popup ? "active" : "" }`}
        onClick={() => setPopup(false)}/>
    </>
  );
};

export default ItemPopup;