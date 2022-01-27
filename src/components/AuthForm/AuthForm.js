import React from "react";

import "./AuthForm.css";
import logo from "../../img/fishLogo.png";

function AuthForm() {
  return (
    <form className="auth-form">
      <div className="auth-form__title-container">
        <img src={logo} alt="logo" className="auth-form__logo" />
        <h2 className="auth-form__title">Вход в сервис</h2>
      </div>
      <input
        type="email"
        name="email"
        className="auth-form__input"
        placeholder="Электронная почта"
        required
      ></input>
      <input
        type="password"
        name="password"
        className="auth-form__input"
        placeholder="Пароль"
        required
      ></input>
      <input type="submit" className="auth-form__submit" value="ВОЙТИ"></input>
    </form>
  );
}

export default AuthForm;
