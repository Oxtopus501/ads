import "./Header.css";
import logo from "../../img/fishLogo.png";
import NavBar from "../NavBar/NavBar";
import UserInfo from "../UserInfo/UserInfo";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <NavBar setModalIsActive={props.setModalIsActive} />
      <UserInfo />
    </header>
  );
}

export default Header;
