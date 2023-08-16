import { useAppSelector } from "../../../redux/hooks";
import Product from "../../../types/Product"
import "./item.css"

type ItemProps = {
  item: Product;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn)

  return (
    <div className={`bubble small item ${lightsOn ? "" : "dark"}`}>
      <img src={item.img} alt={item.title} className="item-image"/>
    </div>
  )
};

export default Item;