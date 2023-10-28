import "./Cast.scss";

const Cast = ({ avatar }) => {
  return (
    <div className="cast">
      <img src={avatar} alt="" />

      <h4 className="name">Chris Hemsworth</h4>
    </div>
  );
};

export default Cast;
