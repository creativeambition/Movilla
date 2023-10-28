import "./SingleMovie.scss";
import avengers from "../../assets/movies/avengers.png";
import dune from "../../assets/movies/dune.png";
import MovieDetails from "../../components/Movie/MovieDetails/MovieDetails";
import Movie from "../../components/Movie/Movie";
import Cast from "../../components/CastProfile/Cast";

import avatar1 from "../../assets/casts/3.jpg";
import avatar2 from "../../assets/casts/1.jpg";
import avatar3 from "../../assets/casts/11.jpg";
import { BiShareAlt, BiStar } from "react-icons/bi";
import { GoShare } from "react-icons/go";
import { FiBookmark } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="single_movie_page">
      <div className="movie_banner">
        <img src={avengers} alt="" />
      </div>

      <header>
        <FaChevronLeft
          className="return action_icon"
          onClick={() => {
            navigate(-1);
          }}
        />

        <h2 className="movie_title">AVENGERS: INFINITY WAR</h2>

        <div className="tools">
          <BiStar className="action_icon" />
          <GoShare className="action_icon" />
          <BiShareAlt className="action_icon" />
          <FiBookmark className="action_icon" />
        </div>
      </header>

      <div className="slide_container">
        <div className="slide">
          <img src={avengers} alt="" />
        </div>
        <div className="slide">
          <img src={dune} alt="" />
        </div>
        <div className="slide">
          <img src={avengers} alt="" />
        </div>
      </div>

      <div className="details_section">
        <MovieDetails />

        <div className="cast_section">
          <p className="section_title">Cast</p>

          <div className="casts">
            <div className="wrapper">
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
              <Cast avatar={avatar1} />
              <Cast avatar={avatar2} />
              <Cast avatar={avatar3} />
            </div>
          </div>
        </div>

        <div className="more_info">
          <section className="similar_movies">
            <p className="section_title">Similar</p>

            <div className="wrapper">
              <Movie movie_banner={dune} type="small" link="/movie/id" />
              <Movie movie_banner={dune} type="small" link="/movie/id" />
              <Movie movie_banner={dune} type="small" link="/movie/id" />
              <Movie movie_banner={dune} type="small" link="/movie/id" />
              <Movie movie_banner={dune} type="small" link="/movie/id" />
              <Movie movie_banner={dune} type="small" link="/movie/id" />
              <Movie movie_banner={dune} type="small" link="/movie/id" />
            </div>
          </section>

          <div className="meta_data">
            <p className="section_title">More info | Meta Data</p>

            <section>
              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>

              <hr />

              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>

              <hr />

              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>

              <hr />

              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>

              <hr />

              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>
              <hr />

              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>
              <hr />

              <div className="x">
                <div className="key">Year</div>
                <div className="val">2023</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
