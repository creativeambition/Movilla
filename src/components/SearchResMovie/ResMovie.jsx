import { Link } from "react-router-dom";
import "./ResMovie.scss";

const ResMovie = ({ banner, title, handleClick }) => {
  return (
    <Link to="/movie/id" onClick={handleClick}>
      <div className="res_movie">
        <img src={banner} alt="" className="banner" />

        <div className="details">
          <span className="title">{title || "Loading..."}</span>

          <div className="info">
            <span>2023</span>
            <span>4.5</span>
            <span>2</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResMovie;
