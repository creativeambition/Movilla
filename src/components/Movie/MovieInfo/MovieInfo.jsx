import "./MovieInfo.scss";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const MovieInfo = () => {
  return (
    <div className="movie_info">
      <span>2023</span>

      <div className="info rating">
        <AiOutlineStar className="icon" />
        <span>4.5</span>
      </div>

      <div className="info duration">
        <BiTimeFive className="icon" />
        <span>1.5</span>
      </div>
    </div>
  );
};

export default MovieInfo;
