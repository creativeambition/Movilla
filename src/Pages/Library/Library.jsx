import { BiLibrary } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import MovieSection from "../../components/MovieSection/MovieSection";
import Movie from "../../components/Movie/Movie";

const Library = () => {
  const data = useLoaderData();

  return (
    <div className="page library">
      {data.favData.length > 0 ? (
        <MovieSection sectionTitle="✨ Favorites">
          {data.favData.map((movie) => (
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
        <MovieSection sectionTitle="No Favorites"></MovieSection>
      )}

      {data.bookmarkData.length > 0 ? (
        <MovieSection sectionTitle="💫 Bookmarks">
          {data.bookmarkData.map((movie) => (
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
        <MovieSection sectionTitle="No Bookmarks"></MovieSection>
      )}

      {data.favData.length == 0 && data.bookmarkData.length == 0 && (
        <div className="placeholder">
          <BiLibrary className="placeholder_illustration" />
          <span className="placeholder_txt">Library is empty</span>
        </div>
      )}
    </div>
  );
};

export default Library;
