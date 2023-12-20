import "./MovieInfo.scss";
import { TbStar } from "react-icons/tb";
import { BiCollection } from "react-icons/bi";

const MovieInfo = () => {
  return (
    <div className="movie_info">
      <div className="info duration">
        <BiCollection className="icon" />
        <span>Animation</span>
      </div>

      <div className="info rating">
        <TbStar className="icon" />
        <span>4.5</span>
      </div>

      <span>2023</span>
    </div>
  );
};

export default MovieInfo;
