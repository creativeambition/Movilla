import "./MovieDetails.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import MovieInfo from "../MovieInfo/MovieInfo";
import ActionButtons from "../../ActionButtons/ActionButtons";

const MovieDetails = () => {
  return (
    <div className="movie_details">
      <span className="movie_overview">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit
        inventore dignissimos sint commodi veritatis expedita tenetur cupiditate
        ut architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis voluptatem, minima tempora ex libero dolorem corporis magnam
        earum laudantium fugit dolores soluta ut, inventore non accusantium
        numquam quis eos sunt?
      </span>

      <MovieInfo />
      <ActionButtons />
    </div>
  );
};

export default MovieDetails;
