import Movie from "../../components/Movie/Movie";
import { BiMovie } from "react-icons/bi";
import { useRouteLoaderData } from "react-router-dom";

const Movies = () => {
  const { topRatedMovies, trendingMovies } = useRouteLoaderData("root");

  return (
    <div className="page movies_page">
      <div className="page_header">
        <BiMovie />
        Movies
      </div>

      <section>
        <div className="movies_wrapper">
          {topRatedMovies.map((movie) => (
            <Movie
              key={movie.id}
              movie_banner={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              type="wide"
              link={`/${movie.media_type || "movie"}/${movie.id}`}
              content={movie}
            />
          ))}
        </div>
      </section>

      <section>
        <header id="top_rated">
          <span className="section_title">Top Rated</span>
        </header>

        <div className="movies_wrapper">
          {trendingMovies.map((movie) => (
            <Movie
              key={movie.id}
              movie_banner={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              type="medium"
              link={`/${movie.media_type || "movie"}/${movie.id}`}
              content={movie}
            />
          ))}
        </div>
      </section>

      <section id="action">
        <header>
          <span className="section_title">Action</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={avengers} type="long" link="/movie/id" />
          <Movie movie_banner={spider} type="long" link="/movie/id" />
          <Movie movie_banner={spiderman} type="long" link="/movie/id" />
          <Movie movie_banner={witcher} type="long" link="/movie/id" />
          <Movie movie_banner={mario} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={avengers} type="long" link="/movie/id" />
          <Movie movie_banner={spider} type="long" link="/movie/id" />
          <Movie movie_banner={spiderman} type="long" link="/movie/id" />
          <Movie movie_banner={witcher} type="long" link="/movie/id" />
          <Movie movie_banner={mario} type="long" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header id="adventure">
          <span className="section_title">Adventure</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={avengers} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={mario} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={avengers} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={mario} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header id="animation">
          <span className="section_title">Animation</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={avengers} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={mario} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={avengers} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={mario} type="medium" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header id="comedy">
          <span className="section_title">Comedy</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header id="crime">
          <span className="section_title">Crime</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Documentary</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Horror</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="medium" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Family</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Fantasy</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="long" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Music</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Mystery</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Science Fiction</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>{/* <span className="section_title">TV Movie</span> */}</header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="wide" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Drama</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">War</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Thriller</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
          {/* <Movie movie_banner={dune} type="small" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">New Releases</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={mario} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={mario} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="wide" link="/movie/id" /> */}
          {/* <Movie movie_banner={avengers} type="wide" link="/movie/id" /> */}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Upcoming</span>
        </header>

        <div className="movies_wrapper">
          {/* <Movie movie_banner={mario} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={avengers} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={mario} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spider} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={witcher} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={spiderman} type="medium" link="/movie/id" /> */}
          {/* <Movie movie_banner={avengers} type="medium" link="/movie/id" /> */}
        </div>
      </section>
    </div>
  );
};

export default Movies;
