import "./navbar.css";

type NavBarProps = {
  lights: boolean;
}

const Navbar: React.FC<NavBarProps> = ({ lights }) => {

  return (
    <div className={`navbar__container bubble ${lights ? "" : "dark"}`}>
      Navbar
    </div>
  );
};

export default Navbar;