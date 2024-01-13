import { FiStar } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import MovieSection from "../../components/MovieSection/MovieSection";
import Movie from "../../components/Movie/Movie";

const Favorites = () => {
  const data = useLoaderData();

  return (
    <div className="page fav_page">
      {data ? (
        <MovieSection sectionTitle="✨ Favorites">
          {data.map((movie) => (
            <Movie
              key={movie.id}
              movie_banner={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              type="medium"
              link={`/${movie.media_type}/${movie.id}`}
              content={movie}
            />
          ))}
        </MovieSection>
      ) : (
        <div className="placeholder">
          <FiStar className="placeholder_illustration" />

          <span className="placeholder_txt">
            Movies added to favorites will be listed here
          </span>
        </div>
      )}
    </div>
  );
};

export default Favorites;
