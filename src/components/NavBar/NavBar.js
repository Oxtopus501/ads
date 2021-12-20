import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/appl" className="navbar__list-item">
            Заявки
          </Link>
        </li>
        <li>
          <a className="navbar__list-item">Создать заявку</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
