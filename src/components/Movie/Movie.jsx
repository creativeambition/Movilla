import "./Movie.scss";
import { HiOutlineBookmark } from "react-icons/hi";
import MovieInfo from "./MovieInfo/MovieInfo";
import { Link } from "react-router-dom";
import { AddToBookmarks } from "../../Data/Data";

const Movie = ({ movie_banner, type, link, content }) => {
  let title =
    content?.title ||
    content?.original_title ||
    content?.name ||
    content?.original_name ||
    "loading...";

  function handleClick() {
    AddToBookmarks(content);
  }

  return (
    <div className={`movie ${type}`} title={title}>
      <Link to={link}>
        <img src={movie_banner} alt="" loading="lazy" />
      </Link>

      <div className="add_to_fav" title="Save for later" onClick={handleClick}>
        <HiOutlineBookmark className="icon" />
      </div>

      <div className="details">
        <span className="title">{title}</span>
        {type == "wide" && <p className="desc">{content?.overview}</p>}

        <MovieInfo data={content} mediaType={link.split("/")[1]} />
      </div>
    </div>
  );
};

export default Movie;
