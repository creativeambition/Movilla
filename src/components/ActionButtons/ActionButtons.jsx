import "./ActionButtons.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className="action_buttons">
      <Link to="/watch/spider-man">
        <button>
          <BsFillPlayFill className="icon play" />
          <span>Watch</span>
        </button>
      </Link>

      <button>
        <FiStar className="icon" />
        <span>Favorites</span>
      </button>
    </div>
  );
};

export default ActionButtons;
