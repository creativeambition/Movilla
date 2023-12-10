import "./SingleMovie.scss";
import avengers from "../../assets/movies/avengers.png";
import dune from "../../assets/movies/dune.png";
import Movie from "../../components/Movie/Movie";
import Cast from "../../components/CastProfile/Cast";

import avatar1 from "../../assets/cast/3.jpg";
import avatar2 from "../../assets/cast/1.jpg";
import avatar3 from "../../assets/cast/11.jpg";
import { BiShareAlt, BiStar } from "react-icons/bi";
import { GoShare } from "react-icons/go";
import { FiBookmark } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieInfo from "../../components/Movie/MovieInfo/MovieInfo";
import CTAButtons from "../../components/CTAButtons/CTAButtons";
import {
  MovieCredits,
  MovieDetails,
  MovieImages,
  MovieVideos,
  SimilarMovies,
} from "../../Data/Data";

const SingleMovie = () => {
  const navigate = useNavigate();

  const [expandOverview, setexpandOverview] = useState(false);

  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    MovieDetails(id).then((data) => setMovieDetails(data));
    MovieImages(id).then((data) => setMovieImages(data.backdrops));
    SimilarMovies(id).then((data) => setSimilarMovies(data.results));
    MovieCredits(id).then((data) => setCast(data.cast));
  }, [id]);

  return (
    <div className="single_movie_page">
      <div className="movie_banner">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
          alt=""
        />
      </div>

      <header>
        <FaChevronLeft
          className="return action_icon"
          onClick={() => {
            navigate(-1);
          }}
        />

        <h2 className="movie_title">
          {movieDetails.title ||
            movieDetails.original_title ||
            movieDetails.name ||
            movieDetails.original_name ||
            "loading..."}
        </h2>

        <div className="tools">
          <BiStar className="action_icon" />
          <GoShare className="action_icon" />
          <BiShareAlt className="action_icon" />
          <FiBookmark className="action_icon" />
        </div>
      </header>

      <div className="slide_container">
        {movieImages.length > 0 &&
          movieImages.map((img) => {
            return (
              <div className="slide" key={img.file_path}>
                <img
                  src={`https://image.tmdb.org/t/p/original${img.file_path}`}
                  alt=""
                />
              </div>
            );
          })}
      </div>

      <div className="details_section">
        <div className="overview_section">
          <p className="section_title">Overview</p>

          <span className={`movie_overview ${expandOverview && "expand"}`}>
            {movieDetails.overview || "loading..."}
            <div
              className="show_more"
              onClick={() => {
                setexpandOverview((prev) => !prev);
              }}
            >
              {expandOverview ? "Show Less" : "Show More"}
            </div>
          </span>

          <MovieInfo data={movieDetails} />
          <CTAButtons />
        </div>

        <div className="cast_section">
          <p className="section_title">Cast</p>

          <div className="casts">
            <div className="wrapper">
              {cast.map((cast) => (
                <Cast
                  key={cast.cast_id}
                  profile={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  name={cast.original_name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="more_info">
          <div className="similar_movies">
            <p className="section_title">Similar</p>

            <div className="wrapper">
              {similarMovies.length > 0 &&
                similarMovies.map((movie) => {
                  return (
                    <Movie
                      key={movie.id}
                      movie_banner={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      type="medium"
                      link={`/movie/${movie.id}`}
                      content={movie}
                    />
                  );
                })}
            </div>
          </div>

          <div className="more_data">
            <p className="section_title">Info</p>

            <div className="content">
              <div className="data">
                <div className="key">Release Date</div>
                <span>-</span>
                <div className="val">{movieDetails?.release_date}</div>
              </div>

              <hr />

              <div className="data">
                <div className="key">Total Votes</div>
                <span>-</span>

                <div className="val">{movieDetails?.vote_count}</div>
              </div>

              <hr />

              <div className="data">
                <div className="key">Rating</div>
                <span>-</span>

                <div className="val">{movieDetails?.vote_average}</div>
              </div>

              <hr />

              <div className="data">
                <div className="key">Budget</div>
                <span>-</span>

                <div className="val">{movieDetails?.budget}</div>
              </div>

              <hr />

              <div className="data">
                <div className="key">Revenue</div>
                <span>-</span>

                <div className="val">{movieDetails?.revenue}</div>
              </div>
              <hr />

              <div className="data">
                <div className="key">Popularity</div>
                <span>-</span>

                <div className="val">{movieDetails?.popularity}</div>
              </div>
              <hr />

              <div className="data">
                <div className="key">Production Companies</div>
                <span>-</span>

                <div className="val">
                  {movieDetails?.production_companies?.map((company) => {
                    return company.name + ", ";
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
