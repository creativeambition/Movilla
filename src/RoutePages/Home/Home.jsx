import "./Home.scss";
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

import action from "../../assets/action.png";
import adventure from "../../assets/adventure.png";
import animated from "../../assets/animated.png";
import comedy from "../../assets/comedy.png";
import scifi from "../../assets/sci-fi.png";
import war from "../../assets/war.png";

const Home = () => {
  return (
    <>
      <Featured />

      <section className="section">
        <header>
          <span className="section_title">Popular Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Favorites</span>
        </header>

        <div className="movies_wrapper">
          <div className="fav_wrapper">
            <img src={fav} alt="" className="fav_gif" />
          </div>
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Top Rated Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="large_square" link="movie/id" />
          <Movie movie_banner={dune} type="large_square" link="movie/id" />
          <Movie movie_banner={spider} type="large_square" link="movie/id" />
          <Movie movie_banner={avengers} type="large_square" link="movie/id" />
          <Movie movie_banner={spiderman} type="large_square" link="movie/id" />
          <Movie movie_banner={witcher} type="large_square" link="movie/id" />
          <Movie movie_banner={dune} type="large_square" link="movie/id" />
          <Movie movie_banner={spider} type="large_square" link="movie/id" />
          <Movie movie_banner={avengers} type="large_square" link="movie/id" />
          <Movie movie_banner={spiderman} type="large_square" link="movie/id" />
          <Movie movie_banner={witcher} type="large_square" link="movie/id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Now Playing</span>

          <div className="live"></div>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="fill_width" link="movie/id" />
          <Movie movie_banner={dune} type="fill_width" link="movie/id" />
          <Movie movie_banner={spider} type="fill_width" link="movie/id" />
          <Movie movie_banner={avengers} type="fill_width" link="movie/id" />
          <Movie movie_banner={spiderman} type="fill_width" link="movie/id" />
          <Movie movie_banner={witcher} type="fill_width" link="movie/id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Popular TV Shows</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={avengers} type="large_square" link="movie/id" />
          <Movie movie_banner={spider} type="large_square" link="movie/id" />
          <Movie movie_banner={witcher} type="large_square" link="movie/id" />
          <Movie movie_banner={spiderman} type="large_square" link="movie/id" />
          <Movie movie_banner={mario} type="large_square" link="movie/id" />
          <Movie movie_banner={avengers} type="large_square" link="movie/id" />
          <Movie movie_banner={spider} type="large_square" link="movie/id" />
          <Movie movie_banner={witcher} type="large_square" link="movie/id" />
          <Movie movie_banner={spiderman} type="large_square" link="movie/id" />
          <Movie movie_banner={mario} type="large_square" link="movie/id" />
          <Movie movie_banner={dune} type="large_square" link="movie/id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Upcoming Movies</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={avengers} type="long" link="movie/id" />
          <Movie movie_banner={spiderman} type="long" link="movie/id" />
          <Movie movie_banner={witcher} type="long" link="movie/id" />
          <Movie movie_banner={mario} type="long" link="movie/id" />
          <Movie movie_banner={dune} type="long" link="movie/id" />
          <Movie movie_banner={spider} type="long" link="movie/id" />
          <Movie movie_banner={avengers} type="long" link="movie/id" />
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Bookmarks</span>
        </header>

        <div className="movies_wrapper">
          <div className="fav_wrapper">
            <img src={fav} alt="" className="fav_gif" />
          </div>
        </div>
      </section>

      <section className="section">
        <header>
          <span className="section_title">Genres</span>
        </header>

        <div className="movies_wrapper">
          <Genre banner={action} category="Action" />
          <Genre banner={adventure} category="Adventure" />
          <Genre banner={animated} category="Animation" />
          <Genre banner={comedy} category="Comedy" />
          <Genre banner={dune} category="Crime" />
          <Genre banner={dune} category="Documentary" />
          <Genre banner={dune} category="Drama" />
          <Genre banner={dune} category="Family" />
          <Genre banner={dune} category="Fantasy" />
          <Genre banner={dune} category="Horror" />
          <Genre banner={dune} category="Music" />
          <Genre banner={dune} category="Mystery" />
          <Genre banner={scifi} category="Science Fiction" />
          <Genre banner={dune} category="TV Movie" />
          <Genre banner={dune} category="Thriller" />
          <Genre banner={war} category="War" />
        </div>
      </section>

      <section className="section">
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

      <section className="section">
        <header>
          <span className="section_title">Airing-Today TV Shows</span>
        </header>

        <div className="movies_wrapper">
          <Movie movie_banner={mario} type="fill_width" link="movie/id" />
          <Movie movie_banner={dune} type="fill_width" link="movie/id" />
          <Movie movie_banner={spider} type="fill_width" link="movie/id" />
          <Movie movie_banner={avengers} type="fill_width" link="movie/id" />
          <Movie movie_banner={spiderman} type="fill_width" link="movie/id" />
          <Movie movie_banner={witcher} type="fill_width" link="movie/id" />
          <Movie movie_banner={mario} type="fill_width" link="movie/id" />
          <Movie movie_banner={dune} type="fill_width" link="movie/id" />
          <Movie movie_banner={spider} type="fill_width" link="movie/id" />
          <Movie movie_banner={avengers} type="fill_width" link="movie/id" />
          <Movie movie_banner={spiderman} type="fill_width" link="movie/id" />
          <Movie movie_banner={witcher} type="fill_width" link="movie/id" />
        </div>
      </section>
    </>
  );
};

export default Home;
