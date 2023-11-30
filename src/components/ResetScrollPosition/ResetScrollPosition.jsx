import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ResetScrollPosition = ({ children }) => {
  const { pathname } = useLocation();
  const app = document.querySelector(".app main");

  useEffect(() => {
    if (app !== null) {
      app.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
};

export default ResetScrollPosition;
