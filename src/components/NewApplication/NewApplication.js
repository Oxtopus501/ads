import Header from "../Header/Header";
import "./NewApplication.css";

function NewApplication() {
  return (
    <>
      <Header />
      <form className="new-application">
        <label className="new-application__label">Адрес</label>
        <input list="address" className="new-application__input" />
        <datalist id="address">
          <option value="ул. Ленина, д. 1" />
          <option value="ул. Ленина, д. 2" />
          <option value="ул. Ленина, д. 3" />
        </datalist>
        <label className="new-application__label">Квартира</label>
        <input className="new-application__input" />
        <label className="new-application__label">Подъезд</label>
        <input className="new-application__input" />
        <label className="new-application__label">Этаж</label>
        <input className="new-application__input" />
        <label className="new-application__label">Телефон</label>
        <input className="new-application__input" />
        <label className="new-application__label">Категория</label>
        <input className="new-application__input" list="categories" />
        <datalist id="categories">
          <option value="1.0" />
          <option value="2.0" />
          <option value="3.0" />
        </datalist>
        <label className="new-application__label">Содержание заявки</label>
        <textarea className="new-application__textarea"></textarea>
        <label className="new-application__label">РЭУ</label>
        <input className="new-application__input" list="division" />
        <datalist id="division">
          <option value="РЭУ 2" />
          <option value="РЭУ 3" />
          <option value="РЭУ 4" />
        </datalist>
        <label className="new-application__label">Передано</label>
        <input className="new-application__input" />
        <label className="new-application__label">Время передачи</label>
        <input type="time" className="new-application__input" />
        <label className="new-application__label">Инициатор заявки</label>
        <input className="new-application__input" list="initiator" />
        <datalist id="initiator">
          <option value="Житель" />
          <option value="ГЖИ" />
          <option value="УК" />
        </datalist>
        <label className="new-application__label">Статус заявки</label>
        <input className="new-application__input" list="status" />
        <datalist id="status">
          <option value="В работе" />
          <option value="Выполнена" />
          <option value="Дополнительный контроль" />
        </datalist>
        <label className="new-application__label">Время исполнения</label>
        <input type="datetime-local" className="new-application__input" />
        <label className="new-application__label">Комментарий к статусу</label>
        <textarea className="new-application__textarea"></textarea>
        <label className="new-application__label">Фамилия</label>
        <input className="new-application__input" />
        <label className="new-application__label">Имя</label>
        <input className="new-application__input" />
        <label className="new-application__label">Отчество</label>
        <input className="new-application__input" />
        <button type="submit" className="new-application__submit-button">
          Сохранить заявку
        </button>
      </form>
    </>
  );
}

export default NewApplication;
