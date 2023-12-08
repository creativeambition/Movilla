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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MovieInfo from "../../components/Movie/MovieInfo/MovieInfo";
import CTAButtons from "../../components/CTAButtons/CTAButtons";

const SingleMovie = () => {
  const navigate = useNavigate();
  const [expandOverview, setexpandOverview] = useState(false);

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
        <div className="overview_section">
          <p className="section_title">Overview</p>

          <span className={`movie_overview ${expandOverview && "expand"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            nobis quam ipsum ratione accusantium rerum, voluptates corrupti
            nesciunt quasi doloremque pariatur corporis quidem amet sapiente
            quibusdam praesentium sequi libero molestiae, officiis totam!
            Laborum nobis expedita rem ratione, earum, corporis sunt adipisci
            fugiat, repellat nam ut libero qui quam magni cum magnam
            consequuntur non architecto eius doloribus ex unde sit dolor? Minus
            cum, aspernatur aperiam eligendi harum libero maiores aliquid.
            Labore consequuntur veniam reiciendis, molestiae dolorem itaque
            consectetur nisi nihil rerum dicta nostrum in, iure sit quis numquam
            voluptas voluptatibus explicabo! Cupiditate sapiente ea minus
            corrupti non quis laboriosam commodi repellendus.
            <div
              className="show_more"
              onClick={() => {
                setexpandOverview((prev) => !prev);
              }}
            >
              {expandOverview ? "Show Less" : "Show More"}
            </div>
          </span>

          <MovieInfo />
          <CTAButtons />
        </div>

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
          <div className="similar_movies">
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
          </div>

          <div className="meta_data">
            <p className="section_title">About</p>

            <div className="content">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
