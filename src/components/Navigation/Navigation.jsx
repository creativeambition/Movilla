import "./Navigation.scss";
import Nav from "./NavIcon/Nav";
import { useContext } from "react";
import { SharedContext } from "../../SharedContext";

import { RiMenu4Fill } from "react-icons/ri";

import { RiHome5Line } from "react-icons/ri";
import { FiStar, FiTv } from "react-icons/fi";
import { BiLibrary, BiMovie } from "react-icons/bi";

import { MdOutlineFormatPaint } from "react-icons/md";

const Navigation = () => {
  const { NavActive, setNavActive, ThemeOptions, setThemeOptions } =
    useContext(SharedContext);

  function handleTheme() {
    setThemeOptions(!ThemeOptions);
  }
  return (
    <nav className={`navigation ${NavActive && "expand_nav"}`}>
      <div
        className="menu_toggle"
        onClick={() => {
          setNavActive(!NavActive);
        }}
      >
        <RiMenu4Fill className="menu_icon" />
        <h2>Movilla</h2>
      </div>

      <div className="nav_icons">
        <div className="indicator"></div>

        <Nav Icon={RiHome5Line} title="Home" link="/" index={0} />
        <Nav Icon={BiMovie} title="Movies" link="movies" index={1} />
        <Nav Icon={FiTv} title="TV Shows" link="tv-shows" index={2} />
        <Nav Icon={FiStar} title="Favorites" link="favorites" index={3} />
        <Nav Icon={BiLibrary} title="Library" link="lib" index={4} />
      </div>

      <div className="theme_toggle">
        <div className="paint_icon" title="Change Theme" onClick={handleTheme}>
          <MdOutlineFormatPaint className="icon" />
        </div>

        <div className={`theme_colors ${ThemeOptions && "show_options"}`}>
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
            style={{ "--custom-clr": "#bdcce4" }}
            title="Light Theme"
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
