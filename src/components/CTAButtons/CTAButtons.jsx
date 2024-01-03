import "./CTAButtons.scss";
import { HiMiniPlay } from "react-icons/hi2";
import { TbStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AddToFavorites } from "../../Data/Data";
import { useState } from "react";

const CTAButtons = ({ mediaType, movie, featured }) => {
  const title =
    movie?.title ||
    movie?.original_title ||
    movie?.name ||
    movie?.original_name;

  const [fav, setFav] = useState(false);

  function handleClick() {
    AddToFavorites(movie, mediaType)
      .then((doc) => {
        setFav(true);
        alert("Successfully added to favorites");
      })
      .catch((err) => {
        console.log("An error occurred", err);
        alert("Unable to add to favorites");
      });
  }

  return (
    <div className="cta_buttons">
      {featured ? (
        <Link to={`/${mediaType}/${movie?.id}`}>
          <button>
            <HiMiniPlay className="icon play" />
            <span>Do NOT !Click</span>
          </button>
        </Link>
      ) : (
        <Link to={`/watch/${mediaType}/${title}/${movie?.id}`}>
          <button>
            <HiMiniPlay className="icon play" />
            <span>Watch Trailer</span>
          </button>
        </Link>
      )}

      <button onClick={handleClick}>
        <TbStar className="icon" />
        {fav ? (
          <span>Remove from Favorites</span>
        ) : (
          <span>Add to Favorites</span>
        )}
      </button>
    </div>
  );
};

export default CTAButtons;
