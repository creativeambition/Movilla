import "./CTAButtons.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { HiMiniPlay } from "react-icons/hi2";
import { TbStar } from "react-icons/tb";
import { Link } from "react-router-dom";

const CTAButtons = () => {
  return (
    <div className="cta_buttons">
      <Link to="/watch/spider-man">
        <button>
          <HiMiniPlay className="icon play" />
          <span>Play Now</span>
        </button>
      </Link>

      <button>
        <TbStar className="icon" />
        <span>Add to Favorites</span>
      </button>
    </div>
  );
};

export default CTAButtons;
