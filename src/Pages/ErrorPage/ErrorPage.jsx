import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const error = useRouteError();

  console.log("Hello from error element ->", error);

  return (
    <div className="error-page">
      <h3>An error occurred</h3>

      <p>No such page found</p>

      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
