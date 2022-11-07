import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon="fa-solid fa-stopwatch" className="icon" />
      <h1>React Counter v2</h1>
    </div>
  );
};

export default Header;
