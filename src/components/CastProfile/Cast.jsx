import "./Cast.scss";

const Cast = ({ avatar }) => {
  return (
    <div className="cast">
      <img src={avatar} alt="" />

      <span className="name">Chris Hemsworth</span>
    </div>
  );
};

export default Cast;
