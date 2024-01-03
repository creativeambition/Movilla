import "./ErrorPage.scss";
import { Link } from "react-router-dom";
import err_404 from "../../assets/others/err_404.svg";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={err_404} alt="" />

      <h3>An error occurred</h3>
      <p>Check your connection and try again</p>

      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
