import "./Fav.scss";
import { FiStar } from "react-icons/fi";

const Fav = () => {
  return (
    <div className="page fav_page">
      <div className="placeholder">
        <FiStar className="placeholder_illustration" />

        <span className="placeholder_txt">
          Movies added to favorites will be displayed here
        </span>
      </div>
    </div>
  );
};

export default Fav;
