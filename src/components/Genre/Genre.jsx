import { Link } from "react-router-dom";
import "./Genre.scss";

const Genre = ({ banner, category, link }) => {
  return (
    <Link to={link} className={`genre ${category}`}>
      <img src={banner} alt="" />
      <span>{category}</span>
    </Link>
  );
};

export default Genre;
