import "./Movie.scss";
import { TbStar } from "react-icons/tb";
import MovieInfo from "./MovieInfo/MovieInfo";
import { Link } from "react-router-dom";

const Movie = ({ movie_banner, type, link }) => {
  return (
    <div className={`movie ${type}`}>
      <Link to={link}>
        <img src={movie_banner} alt="movie_banner" />
      </Link>

      <div className="add_to_fav" title="Add to favorite">
        <TbStar className="icon" />
      </div>

      <div className="details">
        <span className="title">SPIDERMAN: ACCROSS THE SPIDER-VERSE</span>
        {type == "wide" && (
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae
            deleniti provident ad? Inventore blanditiis consequuntur laudantium
            asperiores, officiis quo odit. Saepe exercitationem laudantium iste
            dolor nulla excepturi atque aperiam quos. Eaque dolores repellat eum
            numquam corrupti exercitationem aspernatur velit!
          </p>
        )}

        <MovieInfo />
      </div>
    </div>
  );
};

export default Movie;
