import { Link } from "react-router-dom";

import "./UserInfo.css";
import LogoutIcon from "../LogoutIcon/LogoutIcon";

function UserInfo() {
  return (
    <div className="user-info">
      <span className="user-info__name">Юзернэйм И.</span>
      <Link to="/">
        <LogoutIcon />
      </Link>
    </div>
  );
}

export default UserInfo;
