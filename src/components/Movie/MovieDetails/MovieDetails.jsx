import "./MovieDetails.scss";
import MovieInfo from "../MovieInfo/MovieInfo";
import ActionButtons from "../../ActionButtons/ActionButtons";
import { useState } from "react";

const MovieDetails = () => {
  const [expandOverview, setexpandOverview] = useState(false);

  return (
    <div className="movie_details">
      <p className="section_title">Overview</p>

      <span className={`movie_overview ${expandOverview && "expand"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nobis
        quam ipsum ratione accusantium rerum, voluptates corrupti nesciunt quasi
        doloremque pariatur corporis quidem amet sapiente quibusdam praesentium
        sequi libero molestiae, officiis totam! Laborum nobis expedita rem
        ratione, earum, corporis sunt adipisci fugiat, repellat nam ut libero
        qui quam magni cum magnam consequuntur non architecto eius doloribus ex
        unde sit dolor? Minus cum, aspernatur aperiam eligendi harum libero
        maiores aliquid. Labore consequuntur veniam reiciendis, molestiae
        dolorem itaque consectetur nisi nihil rerum dicta nostrum in, iure sit
        quis numquam voluptas voluptatibus explicabo! Cupiditate sapiente ea
        minus corrupti non quis laboriosam commodi repellendus.
        <div
          className="show_more"
          onClick={() => {
            setexpandOverview((prev) => !prev);
          }}
        >
          {expandOverview ? "Show Less" : "Show More"}
        </div>
      </span>

      <MovieInfo />
      <ActionButtons />
    </div>
  );
};

export default MovieDetails;
