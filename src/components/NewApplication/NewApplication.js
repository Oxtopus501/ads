import "./NewApplication.css";

function NewApplication() {
  return (
    <div className="new-application__modal new-application__modal_isActive">
      <p className="new-application__to-do">
        Это будущее модальное окно для добавления новой заявки. До добавления
        оверлея и состояний, регулирующих его видимость, оно полежит здесь. По
        окончании работ оно будет скрыто по-умолчанию и доступно по нажатию
        ссылки "Создать заявку"
      </p>
      <div className="new-application__header">
        <h2 className="new-application__title">Добавить заявку</h2>
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
        </form>
      </div>
    </div>
  );
}

export default NewApplication;
