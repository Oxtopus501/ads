import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/appl" className="navbar__list-item">
            Заявки
          </Link>
        </li>
        <li>
          <a
            className="navbar__list-item"
            onClick={() => props.setModalIsActive(true)}
          >
            Создать заявку
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
