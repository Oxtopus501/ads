import "./Modal.css";
import CloseButton from "../CloseButton/CloseButton";

function Modal(props) {
  return (
    <div
      className={`modal ${props.isActive ? "modal_active" : ""}`}
      onClick={() => props.setIsActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <CloseButton setIsActive={props.setIsActive} />
        <div className="modal__header">
          <h2 className="modal__title">Добавить заявку</h2>
        </div>
        <form className="modal__form">
          <input className="modal__input" placeholder="ФИО заявителя"></input>
          <input
            className="modal__input"
            placeholder="E-mail заявителя"
          ></input>
          <input
            className="modal__input"
            placeholder="Телефон заявителя"
          ></input>
          <input className="modal__input" placeholder="Адрес"></input>
          <input className="modal__input" placeholder="Номер квартиры"></input>
          <input className="modal__input" placeholder="Лицевой счёт"></input>
          <input
            className="modal__input"
            placeholder="Категория проблемы"
          ></input>
          <p className="modal__caption">Подробное описание проблемы</p>
          <textarea className="modal__textarea"></textarea>
          <button type="submit" className="modal__submit-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
