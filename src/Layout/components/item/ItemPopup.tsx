import Product from "../../../types/Product";
import "./item.css";

type ItemPopupProps = {
  item: Product;
  popup: boolean;
  setPopup: Function;
};

const ItemPopup: React.FC<ItemPopupProps> = ({ item, popup, setPopup }) => {

  return (
    <>
      <div className={`item__popup--content-box  ${ popup ? "active" : "" }`}>

        <button onClick={()=>setPopup(false)}>Close</button>
        <img className="item-image" src={item.img}/>

      </div>
      <div className={`item__popup--black-screen ${ popup ? "active" : "" }`}/>
    </>
  )
}

export default ItemPopup;