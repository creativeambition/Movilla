import { useEffect, useState } from "react";
import "./MovieInfo.scss";
import { getGenreList } from "../../../Data/Data";
import { TbStar } from "react-icons/tb";
import { BiCollection } from "react-icons/bi";

const MovieInfo = ({ data, mediaType, showAll }) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    if (data) {
      if (data.genres) {
        setGenreList(data.genres);
      } else {
        getGenreList(data?.genre_ids, mediaType).then((data) => {
          setGenreList(data);
        });
      }
    }
  }, [data, mediaType]);

  return (
    <div className="movie_info">
      <span>
        {new Date(data?.release_date || data?.first_air_date).getFullYear() ||
          "2023"}
      </span>

      <div className="info rating">
        <TbStar className="icon" />
        <span>{parseFloat(data?.vote_average).toPrecision(2) || "7.9"}</span>
      </div>

      <div className="info genre_list">
        <BiCollection className="icon" />
        <span>
          {showAll
            ? genreList.map((g) => g.name).join(", ")
            : genreList[0]?.name}
        </span>

        {/* <span>{genreList[0]?.name || "x"}</span> */}
      </div>
    </div>
  );
};

export default MovieInfo;
