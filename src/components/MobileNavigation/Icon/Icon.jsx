import "./Icon.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SharedContext } from "../../../SharedContext";

const Icon = ({ Icon, title, active, link }) => {
  const { setNavActive } = useContext(SharedContext);

  useEffect(() => {
    const navIcons = document.querySelectorAll(".mobile_nav_icon");

    navIcons.forEach((it) => {
      it.addEventListener("click", () => {
        setNavActive(false);

        navIcons.forEach((it) => {
          it.classList.remove("active");
        });

        it.classList.add("active");
      });
    });
  }, []);

  return (
    <Link to={link} className={`mobile_nav_icon ${active && "active"}`}>
      <Icon className="icon" />
      <span>{title}</span>
    </Link>
  );
};

export default Icon;
