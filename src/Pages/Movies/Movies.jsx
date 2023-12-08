import Movie from "../../components/Movie/Movie";
import avengers from "../../assets/movies/avengers.png";
import spider from "../../assets/movies/spider.jpg";
import spiderman from "../../assets/movies/spiderman.jpg";
import witcher from "../../assets/movies/witcher.png";
import mario from "../../assets/movies/mario.png";
import dune from "../../assets/movies/dune.png";
import { BiMovie } from "react-icons/bi";

const Movies = () => {
  return (
    <div className="page movies_page">
      <div className="page_header">
        <BiMovie />
        Movies
      </div>

      <section>
        <header>
          {/* <span className="section_title">Trending Movies</span> */}
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={spider} type="wide" link="/movie/id" />
          <Movie movie_banner={mario} type="wide" link="/movie/id" />
          <Movie movie_banner={witcher} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={avengers} type="wide" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Top Rated</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={spiderman} type="medium" link="/movie/id" />
          <Movie movie_banner={avengers} type="medium" link="/movie/id" />
          <Movie movie_banner={spider} type="medium" link="/movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="/movie/id" />
          <Movie movie_banner={witcher} type="medium" link="/movie/id" />
          <Movie movie_banner={mario} type="medium" link="/movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="/movie/id" />
          <Movie movie_banner={avengers} type="medium" link="/movie/id" />
          <Movie movie_banner={spider} type="medium" link="/movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="/movie/id" />
          <Movie movie_banner={witcher} type="medium" link="/movie/id" />
          <Movie movie_banner={mario} type="medium" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Action</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="small" link="/movie/id" />
          <Movie movie_banner={spider} type="small" link="/movie/id" />
          <Movie movie_banner={spiderman} type="small" link="/movie/id" />
          <Movie movie_banner={witcher} type="small" link="/movie/id" />
          <Movie movie_banner={mario} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={avengers} type="small" link="/movie/id" />
          <Movie movie_banner={spider} type="small" link="/movie/id" />
          <Movie movie_banner={spiderman} type="small" link="/movie/id" />
          <Movie movie_banner={witcher} type="small" link="/movie/id" />
          <Movie movie_banner={mario} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Adventure</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="small" link="/movie/id" />
          <Movie movie_banner={spider} type="small" link="/movie/id" />
          <Movie movie_banner={spiderman} type="small" link="/movie/id" />
          <Movie movie_banner={witcher} type="small" link="/movie/id" />
          <Movie movie_banner={mario} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={avengers} type="small" link="/movie/id" />
          <Movie movie_banner={spider} type="small" link="/movie/id" />
          <Movie movie_banner={spiderman} type="small" link="/movie/id" />
          <Movie movie_banner={witcher} type="small" link="/movie/id" />
          <Movie movie_banner={mario} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Animation</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="long" link="/movie/id" />
          <Movie movie_banner={spider} type="long" link="/movie/id" />
          <Movie movie_banner={spiderman} type="long" link="/movie/id" />
          <Movie movie_banner={witcher} type="long" link="/movie/id" />
          <Movie movie_banner={mario} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={avengers} type="long" link="/movie/id" />
          <Movie movie_banner={spider} type="long" link="/movie/id" />
          <Movie movie_banner={spiderman} type="long" link="/movie/id" />
          <Movie movie_banner={witcher} type="long" link="/movie/id" />
          <Movie movie_banner={mario} type="long" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Comedy</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Crime</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Documentary</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Horror</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
          <Movie movie_banner={dune} type="medium" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Family</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Fantasy</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
          <Movie movie_banner={dune} type="long" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Music</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Mystery</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Science Fiction</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">TV Movie</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
          <Movie movie_banner={dune} type="wide" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Drama</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">War</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Thriller</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
          <Movie movie_banner={dune} type="small" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">New Releases</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="wide" link="/movie/id" />
          <Movie movie_banner={spider} type="wide" link="/movie/id" />
          <Movie movie_banner={witcher} type="wide" link="/movie/id" />
          <Movie movie_banner={spiderman} type="wide" link="/movie/id" />
          <Movie movie_banner={mario} type="wide" link="/movie/id" />
          <Movie movie_banner={spider} type="wide" link="/movie/id" />
          <Movie movie_banner={witcher} type="wide" link="/movie/id" />
          <Movie movie_banner={spiderman} type="wide" link="/movie/id" />
          <Movie movie_banner={avengers} type="wide" link="/movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Upcoming</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="medium" link="/movie/id" />
          <Movie movie_banner={spider} type="medium" link="/movie/id" />
          <Movie movie_banner={witcher} type="medium" link="/movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="/movie/id" />
          <Movie movie_banner={avengers} type="medium" link="/movie/id" />
          <Movie movie_banner={mario} type="medium" link="/movie/id" />
          <Movie movie_banner={spider} type="medium" link="/movie/id" />
          <Movie movie_banner={witcher} type="medium" link="/movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="/movie/id" />
          <Movie movie_banner={avengers} type="medium" link="/movie/id" />
        </div>
      </section>
    </div>
  );
};

export default Movies;
