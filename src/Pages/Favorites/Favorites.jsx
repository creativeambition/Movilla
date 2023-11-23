import "./Favorites.scss";
import { FiStar } from "react-icons/fi";

const Favorites = () => {
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

export default Favorites;
