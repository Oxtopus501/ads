import "./TableEntry.css";

function TableEntry(props) {
  return (
    <tr className="table__entry" key={props.id}>
      <td className="table__entry-cell">{props.id}</td>
      <td className="table__entry-cell">{props.date}</td>
      <td className="table__entry-cell">{props.applicant}</td>
      <td className="table__entry-cell">{props.address}</td>
      <td className="table__entry-cell">{props.service}</td>
      <td className="table__entry-cell">{props.competionTime}</td>
      <td className="table__entry-cell">{props.status}</td>
      <td className="table__entry-cell">
        <div
          className={`table__indicator table__indicator_status_${props.statusStyle}`}
        ></div>
      </td>
      <td className="table__entry-cell">{props.executor}</td>
      <td className="table__entry-cell">{props.applcationText}</td>
    </tr>
  );
}

export default TableEntry;
