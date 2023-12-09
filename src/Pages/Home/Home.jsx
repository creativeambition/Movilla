import Featured from "../../components/Featured/Featured";
import Movie from "../../components/Movie/Movie";

import avengers from "../../assets/movies/avengers.png";
import spider from "../../assets/movies/spider.jpg";
import spiderman from "../../assets/movies/spiderman.jpg";
import witcher from "../../assets/movies/witcher.png";
import mario from "../../assets/movies/mario.png";
import dune from "../../assets/movies/dune.png";
import fav from "../../assets/movies/fav.gif";
import Genre from "../../components/Genre/Genre";

import action from "../../assets/genre/action.png";
import adventure from "../../assets/genre/adventure.png";
import animated from "../../assets/genre/animated.png";
import comedy from "../../assets/genre/comedy.png";
import scifi from "../../assets/genre/sci-fi.png";
import war from "../../assets/genre/war.png";
import fantasy from "../../assets/genre/fantasy.png";
import crime from "../../assets/genre/crime.png";

const Home = () => {
  return (
    <>
      <Featured />

      <section>
        <header>
          <span className="section_title">Popular Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="medium" link="movie/id" />
          <Movie movie_banner={spider} type="medium" link="movie/id" />
          <Movie movie_banner={witcher} type="medium" link="movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="movie/id" />
          <Movie movie_banner={mario} type="medium" link="movie/id" />
          <Movie movie_banner={dune} type="medium" link="movie/id" />
          <Movie movie_banner={avengers} type="medium" link="movie/id" />
          <Movie movie_banner={spider} type="medium" link="movie/id" />
          <Movie movie_banner={witcher} type="medium" link="movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="movie/id" />
          <Movie movie_banner={mario} type="medium" link="movie/id" />
          <Movie movie_banner={dune} type="medium" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Favorites</span>
        </header>

        <div className="movies_wrapper">
          <div className="fav_wrapper">
            <img src={fav} alt="" className="fav_gif" />
          </div>
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Genres</span>
        </header>

        <div className="movies_wrapper">
          <Genre banner={action} category="Action" />
          <Genre banner={animated} category="Animation" />
          <Genre banner={adventure} category="Adventure" />
          <Genre banner={comedy} category="Comedy" />
          <Genre banner={scifi} category="Science Fiction" />
          <Genre banner={war} category="War" />
          <Genre banner={fantasy} category="Fantasy" />
          <Genre banner={crime} category="Crime" />
          <Genre banner={dune} category="Drama" />
          <Genre banner={dune} category="Family" />
          <Genre banner={dune} category="Horror" />
          <Genre banner={dune} category="Music" />
          <Genre banner={dune} category="Mystery" />
          <Genre banner={dune} category="TV Movie" />
          <Genre banner={dune} category="Thriller" />
          <Genre banner={dune} category="Documentary" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Top Rated Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Now Playing</span>

          <div className="live"></div>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="wide" link="movie/id" />
          <Movie movie_banner={dune} type="wide" link="movie/id" />
          <Movie movie_banner={spider} type="wide" link="movie/id" />
          <Movie movie_banner={avengers} type="wide" link="movie/id" />
          <Movie movie_banner={spiderman} type="wide" link="movie/id" />
          <Movie movie_banner={witcher} type="wide" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Trending Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Upcoming Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="medium" link="movie/id" />
          <Movie movie_banner={dune} type="medium" link="movie/id" />
          <Movie movie_banner={spider} type="medium" link="movie/id" />
          <Movie movie_banner={avengers} type="medium" link="movie/id" />
          <Movie movie_banner={spiderman} type="medium" link="movie/id" />
          <Movie movie_banner={witcher} type="medium" link="movie/id" />
          <Movie movie_banner={mario} type="medium" link="movie/id" />
          <Movie movie_banner={dune} type="medium" link="movie/id" />
          <Movie movie_banner={spider} type="medium" link="movie/id" />
          <Movie movie_banner={avengers} type="medium" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Bookmarks</span>
        </header>

        <div className="movies_wrapper">
          <div className="fav_wrapper">
            <img src={fav} alt="" className="fav_gif" />
          </div>
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Popular TV Shows</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Top Rated Shows</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="small" link="movie/id" />
          <Movie movie_banner={dune} type="small" link="movie/id" />
          <Movie movie_banner={spider} type="small" link="movie/id" />
          <Movie movie_banner={avengers} type="small" link="movie/id" />
          <Movie movie_banner={spiderman} type="small" link="movie/id" />
          <Movie movie_banner={witcher} type="small" link="movie/id" />
          <Movie movie_banner={mario} type="small" link="movie/id" />
          <Movie movie_banner={dune} type="small" link="movie/id" />
          <Movie movie_banner={spider} type="small" link="movie/id" />
          <Movie movie_banner={avengers} type="small" link="movie/id" />
          <Movie movie_banner={spiderman} type="small" link="movie/id" />
          <Movie movie_banner={witcher} type="small" link="movie/id" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Airing-Today TV Shows</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="wide" link="movie/id" />
          <Movie movie_banner={dune} type="wide" link="movie/id" />
          <Movie movie_banner={spider} type="wide" link="movie/id" />
          <Movie movie_banner={avengers} type="wide" link="movie/id" />
          <Movie movie_banner={spiderman} type="wide" link="movie/id" />
          <Movie movie_banner={witcher} type="wide" link="movie/id" />
          <Movie movie_banner={mario} type="wide" link="movie/id" />
          <Movie movie_banner={dune} type="wide" link="movie/id" />
          <Movie movie_banner={spider} type="wide" link="movie/id" />
          <Movie movie_banner={avengers} type="wide" link="movie/id" />
          <Movie movie_banner={spiderman} type="wide" link="movie/id" />
          <Movie movie_banner={witcher} type="wide" link="movie/id" />
        </div>
      </section>
    </>
  );
};

export default Home;
