import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import ItemPopup from "./ItemPopup";
import Product from "../../../types/Product";
import "./item.css";

type ItemProps = {
  item: Product;
};

const Item: React.FC<ItemProps> = ({ item }) => {
  const [popup, setPopup] = useState<boolean>(false);
  const lightsOn: boolean = useAppSelector((state)=>state.lights.lightsOn);
  const navigate = useNavigate();

  return (
    <>
      <ItemPopup item={item} popup={popup} setPopup={setPopup}/>
      <div className={`bubble small item ${lightsOn ? "" : "dark"}`} onClick={()=> setPopup(true)}>
        <div className="item-grid">
          <div className="item-images-wrapper">
            <img className="item-image" src={item.img} alt={item.title}/>
            <img className={`item-artist-image ${lightsOn ? "" : "dark"}`} src={item.artist.img} onClick={()=>navigate(`/artist/${item.artist.id}`)} alt={item.artist.name}/>
          </div>
          <h2 className="item-title">{item.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Item;