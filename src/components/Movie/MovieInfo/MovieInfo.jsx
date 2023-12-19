import { useEffect, useState } from "react";
import "./MovieInfo.scss";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { getGenreList } from "../../../Data/Data";

const MovieInfo = ({ data, mediaType }) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    if (data && mediaType) {
      getGenreList(data.genre_ids || data.genres, mediaType).then((data) => {
        setGenreList(data);
      });
    }
  }, []);

  return (
    <div className="movie_info">
      <span>
        {new Date(data?.release_date || data?.first_air_date).getFullYear() ||
          "2023"}
      </span>

      <div className="info rating">
        <AiOutlineStar className="icon" />
        <span>{parseFloat(data?.vote_average).toPrecision(2) || "7.9"}</span>
      </div>

      <div className="info genre_list">
        <BiTimeFive className="icon" />
        <span>{genreList[0]?.name || "Action & Adventure"}</span>
      </div>
    </div>
  );
};

export default MovieInfo;
