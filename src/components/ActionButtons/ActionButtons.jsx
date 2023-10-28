import { BsFillPlayFill } from "react-icons/bs";
import "./ActionButtons.scss";
import { BiPlus } from "react-icons/bi";

const ActionButtons = () => {
  return (
    <div className="action_buttons">
      <button>
        <BsFillPlayFill className="play icon" />
        <span>Watch</span>
      </button>
      <button>
        <BiPlus className="icon" />
        <span>Favorites</span>
      </button>
    </div>
  );
};

export default ActionButtons;
