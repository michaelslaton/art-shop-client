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
    </div>
  );
};

export default HomePage;