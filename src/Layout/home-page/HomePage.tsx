// import { useAppSelector } from "../../redux/hooks";
import { populateRandom } from "../../utils/api/api";
import Item from "./product/Item";
import "./home-page.css";

const stuff = populateRandom(4);

const HomePage: React.FC = () => {
  // const lightsOn = useAppSelector((state)=>state.lights.lightsOn)

  return (
    <div className="home-page__container">
      <div className="home-page__demo-images">
        {stuff.map((product)=>(
          <Item key={product.id} item={product}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;