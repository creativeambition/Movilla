import "./WatchPage.scss";
import raya from "../../assets/raya.mp4";
import { FaChevronLeft } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const WatchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page watch">
      <header>
        <FaChevronLeft
          className="return action_icon"
          onClick={() => {
            navigate(-1);
          }}
        />

        <h3>
          <span>Now Playing: </span>
          Raya And The Last Dragon
        </h3>
      </header>

      <div className="video-container">
        <video autoPlay controls src={raya}></video>
      </div>
    </div>
  );
};

export default WatchPage;
