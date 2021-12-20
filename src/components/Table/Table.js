import TableEntry from "../TableEntry/TableEntry";
import "./Table.css";

function Table() {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th className="table__header-cell">№</th>
          <th className="table__header-cell">Дата обращения</th>
          <th className="table__header-cell">ФИО</th>
          <th className="table__header-cell">Адрес</th>
          <th className="table__header-cell">Услуга</th>
          <th className="table__header-cell">Срок</th>
          <th className="table__header-cell">Статус</th>
          <th className="table__header-cell"></th>
          <th className="table__header-cell">Исполнитель</th>
          <th className="table__header-cell">Текст заявки</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <TableEntry
          id={1}
          date={"15 мая, 12:00"}
          address={"ул. Пушкина, д. Колотушкина"}
          applicant={"Иванов И. И."}
          status={"В работе"}
          competionTime={new Date(2022, 0, 1, 0, 0, 0, 0)
            .toString()
            .slice(0, 24)}
          executor={"Смирнов И. И."}
          service={"Отсутствие света"}
          applcationText={"Вы там что, все с ума посходили?"}
          statusStyle={"in-work"}
        />
        <TableEntry
          id={2}
          date={"15 мая, 12:00"}
          address={"ул. Пушкина, д. Колотушкина"}
          applicant={"Иванов И. И."}
          status={"Решена"}
          competionTime={new Date(2022, 0, 1, 0, 0, 0, 0)
            .toString()
            .slice(0, 24)}
          executor={"Мороз Д."}
          service={"Отсутствие света"}
          applcationText={"Раз-два-три, Ёлочка, гори!"}
          statusStyle={"solved"}
        />
      </tbody>
    </table>
  );
}

export default Table;
