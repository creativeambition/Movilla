import { useNavigate, useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log("Hello from error element ->", error);

  return (
    <div className="error-page">
      <h3>An error occurred</h3>

      <p>No such page found</p>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return
      </button>
    </div>
  );
};

export default ErrorPage;
