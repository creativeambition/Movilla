import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h3>Error 404</h3>

      <p>No such page found</p>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Return
      </button>
    </div>
  );
};

export default ErrorPage;
