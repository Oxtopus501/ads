import "./CloseButton.css";
import CloseIcon from "../CloseIcon/CloseIcon";

function CloseButton(props) {
  return (
    <button className="button-close" onClick={() => props.setIsActive(false)}>
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
