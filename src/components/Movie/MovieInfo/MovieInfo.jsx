import { useEffect, useState } from "react";
import "./MovieInfo.scss";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { getGenreList } from "../../../Data/Data";

const MovieInfo = ({ data }) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    if (data?.genre_ids?.length > 0) {
      getGenreList(data.genre_ids).then((data) => {
        setGenreList(data);
      });
    }
  }, [data]);

  return (
    <div className="movie_info">
      <span>{data?.release_date || "2023-10-05"}</span>

      <div className="info rating">
        <AiOutlineStar className="icon" />
        <span>{parseFloat(data?.vote_average).toPrecision(2)}</span>
      </div>

      <div className="info genre_list">
        <BiTimeFive className="icon" />
        {genreList.length > 0 && <span>{genreList[0].name}</span>}
        {data?.genres?.map((genre) => {
          return <span key={genre.id}>{genre.name},</span>;
        })}
      </div>
    </div>
  );
};

export default MovieInfo;
