import "./CTAButtons.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTAButtons = () => {
  return (
    <div className="cta_buttons">
      <Link to="/watch/spider-man">
        <button>
          <BsFillPlayFill className="icon play" />
          <span>Play Now</span>
        </button>
      </Link>

      <button>
        <FiStar className="icon" />
        <span>Add to Favorites</span>
      </button>
    </div>
  );
};

export default CTAButtons;
