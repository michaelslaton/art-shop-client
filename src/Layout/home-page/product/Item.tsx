import Product from "../../../types/Product"
import "./item.css"

type ItemProps = {
  item: Product;
}

const Item: React.FC<ItemProps> = ({ item }) => {

  return (
    <div className="bubble small item">
      <img src={item.img} className="item-image"/>
    </div>
  )
};

export default Item;