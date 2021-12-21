import "./NewApplication.css";
import CloseButton from "../CloseButton/CloseButton";

function NewApplication(props) {
  return (
    <div
      className={`new-application__modal ${
        props.isActive ? "new-application__modal_active" : ""
      }`}
      onClick={() => props.setIsActive(false)}
    >
      <div
        className="new-application__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton setIsActive={props.setIsActive} />
        <div className="new-application__header">
          <h2 className="new-application__title">Добавить заявку</h2>
        </div>
        <form className="new-application__form">
          <input
            className="new-application__input"
            placeholder="ФИО заявителя"
          ></input>
          <input
            className="new-application__input"
            placeholder="E-mail заявителя"
          ></input>
          <input
            className="new-application__input"
            placeholder="Телефон заявителя"
          ></input>
          <input className="new-application__input" placeholder="Адрес"></input>
          <input
            className="new-application__input"
            placeholder="Номер квартиры"
          ></input>
          <input
            className="new-application__input"
            placeholder="Лицевой счёт"
          ></input>
          <input
            className="new-application__input"
            placeholder="Категория проблемы"
          ></input>
          <p className="new-application__caption">
            Подробное описание проблемы
          </p>
          <textarea className="new-application__textarea"></textarea>
          <button type="submit" className="new-application__submit-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewApplication;
