import "./Header.css";
import logo from "../../img/fishLogo.png";
import NavBar from "../NavBar/NavBar";
import UserInfo from "../UserInfo/UserInfo";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <NavBar />
      <UserInfo />
    </header>
  );
}

export default Header;
