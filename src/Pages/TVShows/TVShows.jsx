import Movie from "../../components/Movie/Movie";
import dune from "../../assets/movies/dune.png";
import avengers from "../../assets/movies/avengers.png";
import mario from "../../assets/movies/mario.png";
import witcher from "../../assets/movies/witcher.png";
import { PiTelevision } from "react-icons/pi";

const TVShows = () => {
  return (
    <div className="page tv-shows">
      <div className="page_header">
        <PiTelevision />
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
          <span className="section_title">Animation</span>
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
          <span className="section_title">Crime</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="long" link="/movie/movie_id" />
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
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Family</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
          <Movie movie_banner={dune} type="wide" link="/movie/movie_id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Kids</span>
        </header>

        <div className="movies_wrapper">
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
          <span className="section_title">Mystery</span>
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
          <span className="section_title">News</span>
        </header>

        <div className="movies_wrapper">
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
          <span className="section_title">Reality</span>
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
          <span className="section_title">Sci-Fi & Fantasy</span>
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
          <span className="section_title">Soap</span>
        </header>

        <div className="movies_wrapper">
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
          <span className="section_title">Talk</span>
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
          <span className="section_title">War & Politics</span>
        </header>

        <div className="movies_wrapper">
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
          <span className="section_title">Western</span>
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
