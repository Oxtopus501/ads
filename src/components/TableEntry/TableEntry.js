import { Link } from "react-router-dom";

import "./TableEntry.css";
import routes from "../../utils/routesConfig";

function TableEntry(props) {
  return (
    <tr className="table-entry" key={props.id}>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.id}</span>
        </Link>
      </td>

      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.date}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.applicant}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.address}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.service}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.competionTime}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.status}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <div
          className={`table__indicator table__indicator_status_${props.statusStyle}`}
        ></div>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">{props.executor}</span>
        </Link>
      </td>
      <td className="table-entry__cell">
        <Link
          className="table-entry__link"
          to={routes.applicationsDetails.create(props.id)}
        >
          <span className="table-entry__inner-text">
            {props.applcationText}
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default TableEntry;
