import "./MobileNav.scss";
import { RiHome5Line } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { BiLibrary, BiMovie } from "react-icons/bi";
import Icon from "./Icon/Icon";
import { useContext } from "react";
import { SharedContext } from "../../SharedContext";

const MobileNav = () => {
  const { NavActive } = useContext(SharedContext);

  return (
    <div className={`mobile_nav ${NavActive && "active"}`}>
      <div className="mobile_nav_icons">
        <Icon Icon={RiHome5Line} title="Home" active link="/" />
        <Icon Icon={BiMovie} title="Movies" link="movies" />
        <Icon Icon={FiTv} title="TV Shows" link="tv-shows" />
        <Icon Icon={BiLibrary} title="Library" link="lib" />
      </div>

      <div className="theme_options">
        <span>Change Theme</span>

        <div className="theme_colors">
          <div
            className="theme"
            data-theme="dark"
            style={{ "--custom-clr": "#101010" }}
            title="Dark Theme"
          ></div>
          <div
            className="theme"
            data-theme="cyan"
            style={{ "--custom-clr": "#0B1E2C" }}
            title="Cyan Theme"
          ></div>
          <div
            className="theme"
            data-theme="purple"
            style={{ "--custom-clr": "#1B182E" }}
            title="Purple Theme"
          ></div>
          <div
            className="theme"
            data-theme="light"
            style={{ "--custom-clr": "#cacaca" }}
            title="Light Theme"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
