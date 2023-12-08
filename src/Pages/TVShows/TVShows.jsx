import Movie from "../../components/Movie/Movie";
import dune from "../../assets/movies/dune.png";
import avengers from "../../assets/movies/avengers.png";
import mario from "../../assets/movies/mario.png";
import witcher from "../../assets/movies/witcher.png";
import { FiTv } from "react-icons/fi";

const TVShows = () => {
  return (
    <div className="page tv-shows">
      <div className="page_header">
        <FiTv />
        TV Shows
      </div>

      <section>
        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={witcher} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={mario} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />

          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
        </div>
      </section>

      <section>
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

      <section>
        <header>
          <span className="section_title">Top Rated</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="medium" link="/movie/movie_id" />
        </div>
      </section>

      <section>
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

      <section>
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

      <section>
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
