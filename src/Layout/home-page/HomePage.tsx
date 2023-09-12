import { populateRandom } from "../../utils/api/api";
import Product from "../../types/Product";
import Item from "../components/item/Item";
import "./home-page.css";

const stuff: Product[] = populateRandom(4);

const HomePage: React.FC = () => {

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