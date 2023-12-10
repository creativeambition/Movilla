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
import { useEffect, useState } from "react";
import {
  AiringToday,
  NowPlaying,
  PopularMovies,
  PopularShows,
  TopRatedMovies,
  TopRatedShows,
  TrendingMovies,
  UpcomingMovies,
} from "../../Data/Data";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [popularShows, setPopularShows] = useState([]);
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  useEffect(() => {
    function fetchData() {
      PopularMovies().then((data) => {
        setPopularMovies(data.results);
      });

      TopRatedMovies().then((data) => {
        setTopRatedMovies(data.results);
      });

      NowPlaying().then((data) => {
        setNowPlaying(data.results);
      });

      TrendingMovies().then((data) => {
        setTrendingMovies(data.results);
      });

      UpcomingMovies().then((data) => {
        setUpcomingMovies(data.results);
      });

      PopularShows().then((data) => {
        setPopularShows(data.results);
      });

      TopRatedShows().then((data) => {
        setTopRatedShows(data.results);
      });

      AiringToday().then((data) => {
        setAiringToday(data.results);
      });
    }

    fetchData();
  }, []);

  return (
    <>
      <Featured />

      <section>
        <header>
          <span className="section_title">Popular Movies</span>
        </header>

        <div className="movies_wrapper">
          {popularMovies.length > 3 &&
            popularMovies.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                type="medium"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
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
          <Genre link={"/movies/#action"} banner={action} category="Action" />
          <Genre link={"/movies"} banner={animated} category="Animation" />
          <Genre link={"/movies"} banner={adventure} category="Adventure" />
          <Genre link={"/movies"} banner={comedy} category="Comedy" />
          <Genre link={"/movies"} banner={scifi} category="Science Fiction" />
          <Genre link={"/movies"} banner={war} category="War" />
          <Genre link={"/movies"} banner={fantasy} category="Fantasy" />
          <Genre link={"/movies"} banner={crime} category="Crime" />
          <Genre link={"/movies"} banner={dune} category="Drama" />
          <Genre link={"/movies"} banner={dune} category="Family" />
          <Genre link={"/movies"} banner={dune} category="Horror" />
          <Genre link={"/movies"} banner={dune} category="Music" />
          <Genre link={"/movies"} banner={dune} category="Mystery" />
          <Genre link={"/movies"} banner={dune} category="TV Movie" />
          <Genre link={"/movies"} banner={dune} category="Thriller" />
          <Genre link={"/movies"} banner={dune} category="Documentary" />
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Top Rated Movies</span>
        </header>

        <div className="movies_wrapper">
          {topRatedMovies.length > 3 &&
            topRatedMovies.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                type="long"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Now Playing</span>

          <div className="live"></div>
        </header>

        <div className="movies_wrapper">
          {nowPlaying.length > 3 &&
            nowPlaying.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                type="wide"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Trending Movies</span>
        </header>

        <div className="movies_wrapper">
          {trendingMovies.length > 3 &&
            trendingMovies.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                type="long"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Upcoming Movies</span>
        </header>

        <div className="movies_wrapper">
          {upcomingMovies.length > 3 &&
            upcomingMovies.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                type="medium"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
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
          {popularShows.length > 3 &&
            popularShows.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                type="long"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Top Rated Shows</span>
        </header>

        <div className="movies_wrapper">
          {topRatedShows.length > 3 &&
            topRatedShows.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                type="medium"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
        </div>
      </section>

      <section>
        <header>
          <span className="section_title">Airing-Today TV Shows</span>
        </header>

        <div className="movies_wrapper">
          {airingToday.length > 3 &&
            airingToday.map((movie) => (
              <Movie
                key={movie.id}
                movie_banner={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                type="wide"
                link={`movie/${movie.id}`}
                content={movie}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
