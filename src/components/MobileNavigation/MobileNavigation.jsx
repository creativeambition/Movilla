import "./MobileNavigation.scss";
import { RiHome5Line } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { BiLibrary, BiMovie } from "react-icons/bi";
import MobileNavIcon from "./MobileNavIcon/MobileNavIcon";
import { useContext } from "react";
import { SharedContext } from "../../SharedContext";

import { MdOutlineFormatPaint } from "react-icons/md";

const MobileNavigation = () => {
  const { NavActive } = useContext(SharedContext);

  return (
    <div className={`mobile_navigation ${NavActive && "active"}`}>
      <div className="mobile_nav_icons">
        <div className="indicator"></div>

        <MobileNavIcon Icon={RiHome5Line} title="Home" link="/" index={0} />
        <MobileNavIcon Icon={BiMovie} title="Movies" link="movies" index={1} />
        <MobileNavIcon Icon={FiTv} title="TV Shows" link="tv-shows" index={2} />
        <MobileNavIcon
          Icon={BiLibrary}
          title="Library"
          link="library"
          index={3}
        />
      </div>

      <div className="theme_options">
        <div className="header">
          Change Theme
          <MdOutlineFormatPaint className="icon" />
        </div>

        <div className="theme_colors">
          <div
            className="theme"
            data-theme="dark"
            style={{ "--custom-clr": "#101010" }}
            title="Dark Theme"
          ></div>
          <div
            className="theme"
            data-theme="moonlight"
            style={{ "--custom-clr": "#0d1232" }}
            title="Moonlight"
          ></div>
          <div
            className="theme"
            data-theme="purple"
            style={{ "--custom-clr": "#1B182E" }}
            title="Purple Theme"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
