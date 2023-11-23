import "./Featured.scss";
import banner from "../../assets/movies/spiderman.jpg";

import { FiBookmark, FiStar } from "react-icons/fi";
import MovieInfo from "../Movie/MovieInfo/MovieInfo";
import { GoShare } from "react-icons/go";
import { BiShareAlt } from "react-icons/bi";
import ActionButtons from "../ActionButtons/ActionButtons";

const Featured = () => {
  return (
    <section className="featured_section">
      <img src={banner} alt="" className="featured_banner" />

      <div className="details">
        <h2 className="movie_title">SPIDER-MAN: ACCROSS THE SPIDER-VERSE</h2>

        <span className="movie_overview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores
          aliquid perspiciatis veritatis amet, eos incidunt aliquam, voluptas
          assumenda vero dolorem dolores fugiat odit ipsa ducimus, totam
          repellat architecto? Natus eius quas odit pariatur officia ut id?
          Dicta modi ullam sint nesciunt obcaecati tempora excepturi repellat
          inventore unde, ab consequuntur explicabo praesentium iusto, accusamus
          laudantium voluptatem esse non, itaque quisquam!
        </span>

        <div className="info_wrapper">
          <MovieInfo />

          <div className="quick_tools">
            <GoShare className="action_icon visit" title="Visit" />
            <BiShareAlt className="action_icon share" title="Share" />
            <FiBookmark className="action_icon favorite" title="Bookmark" />
            <FiStar className="action_icon star" title="Favorite" />
          </div>
        </div>

        <ActionButtons />
      </div>
    </section>
  );
};

export default Featured;
