import "./Movie.scss";
import { BiStar } from "react-icons/bi";
import MovieInfo from "./MovieInfo/MovieInfo";
import { Link } from "react-router-dom";

const Movie = ({ movie_banner, type, link, content }) => {
  return (
    <div className={`movie ${type}`}>
      <Link to={link}>
        <img src={movie_banner} alt="movie_banner" />
      </Link>

      <div className="add_to_fav" title="Add to favorite">
        <BiStar className="icon" />
      </div>

      <div className="details">
        <span className="title">
          {content?.title ||
            content?.original_title ||
            content?.name ||
            content?.original_name ||
            "loading..."}
        </span>
        {type == "wide" && <p className="desc">{content?.overview}</p>}

        <MovieInfo data={content} mediaType={link.split("/")[1]} />
      </div>
    </div>
  );
};

export default Movie;
