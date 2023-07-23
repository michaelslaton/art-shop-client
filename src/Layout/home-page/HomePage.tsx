import Item from "./product/Item";
import dummyData from "../../data/dummy-data";
import "./home-page.css";

type HomePageProps = {
  lights: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ lights }) => {
  return (
    <div className="home-page__container">
      <div className={`bubble ${lights ? "" : "dark"}`}>
        Bubble
      </div>
      <div className={`bubble small ${lights ? "" : "dark"}`}>
        Small Bubble
      </div>
      <div>
        {dummyData.map((product)=>(
          <Item item={product}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;