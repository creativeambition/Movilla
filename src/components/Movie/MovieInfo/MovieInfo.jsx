import "./MovieInfo.scss";
import { TbStar } from "react-icons/tb";
import { BiCollection } from "react-icons/bi";

const MovieInfo = () => {
  return (
    <div className="movie_info">
      <span>2023</span>

      <div className="info rating">
        <TbStar className="icon" />
        <span>8.5</span>
      </div>

      <div className="info movie_genre">
        <BiCollection className="icon" />
        <span>Animation</span>
      </div>
    </div>
  );
};

export default MovieInfo;
