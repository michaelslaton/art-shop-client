import { useAppSelector } from "../../redux/hooks";
import Item from "./product/Item";
import dummyData from "../../data/dummy-data";
import "./home-page.css";

// type HomePageProps = {
//   lights: boolean;
// }

const HomePage: React.FC/*<HomePageProps>*/ = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn)

  return (
    <div className="home-page__container">
      <div className={`bubble ${lightsOn ? "" : "dark"}`}>
        Bubble
      </div>
      <div className={`bubble small ${lightsOn ? "" : "dark"}`}>
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