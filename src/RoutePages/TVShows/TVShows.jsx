import Movie from "../../components/Movie/Movie";
import dune from "../../assets/movies/dune.png";

const TVShows = () => {
  return (
    <div className="page tv-shows">
      <section className="section">
        <header>
          <span className="section_title">Popular</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="fill_width" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="fill_width" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="fill_width" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="fill_width" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="fill_width" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="fill_width" link="/movie/movie_id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Airing Today</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Top Rated</span>
        </header>

        <div className="movies_wrapper">
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
          <Movie
            movie_banner={dune}
            type="large_square"
            link="/movie/movie_id"
          />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Drama</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Comedy</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="small" link="/movie/movie_id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Documentary</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
        </div>
      </section>
    </div>
  );
};

export default TVShows;
