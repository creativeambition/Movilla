import "./Header.scss";
import logo from "../../assets/others/logo.png";
import profile_src from "../../assets/others/profile.jpg";
import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { SharedContext } from "../../SharedContext";

import { RiMenu4Fill } from "react-icons/ri";
import { BiChevronLeft, BiSearchAlt } from "react-icons/bi";

import spiderman_banner from "../../assets/movies/spider.jpg";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
const ResMovie = lazy(() => import("../SearchResMovie/ResMovie"));

const Header = () => {
  const { mobileView, NavActive, setNavActive, setShowProfile } =
    useContext(SharedContext);
  const [ActivateSearch, setActivateSearch] = useState(false);
  const [SearchValue, setSearchValue] = useState("");

  useEffect(() => {
    const header = document.querySelector(".app_header");
    const app = document.querySelector(".app main");

    function updateHeaderBgOnScroll() {
      if (app.scrollTop > 400) {
        header.classList.add("colorize");
      } else {
        header.classList.remove("colorize");
      }
    }

    updateHeaderBgOnScroll();
    app.addEventListener("scroll", updateHeaderBgOnScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector(".app_header");

    if (NavActive) {
      header.classList.add("nav_active");
    } else {
      header.classList.remove("nav_active");
    }
  }, [NavActive]);

  function handleMovieClick() {
    setActivateSearch(false);
    setSearchValue("");
  }

  return (
    <header className="app_header">
      <div className="logo field">
        {mobileView ? (
          <RiMenu4Fill
            className="menu_icon"
            onClick={() => {
              setNavActive(!NavActive);
            }}
          />
        ) : (
          <img src={logo} alt="logo" />
        )}

        <Link to="/">
          <h2>Movilla</h2>
        </Link>

        {/* {!mobileView && (
          <div className="breadcrumbs">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Movies
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </div>
        )} */}
      </div>

      <>
        <div className={`search field ${ActivateSearch && "active"}`}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={SearchValue}
            disabled={!ActivateSearch}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <button
            className="search_icon"
            disabled={SearchValue}
            onClick={() => {
              setActivateSearch((prev) => !prev);
            }}
          >
            {ActivateSearch ? (
              <BiChevronLeft className="icon" />
            ) : (
              <BiSearchAlt className="icon" />
            )}
          </button>
        </div>
        {SearchValue && (
          <div className="search_res">
            <span>search results for "{SearchValue}"</span>

            <div className="res_movies_wrapper">
              <Suspense fallback="Loading...">
                <ResMovie
                  banner={spiderman_banner}
                  title="Spaderman: Into the spader-verse"
                  handleClick={handleMovieClick}
                />
                <ResMovie
                  banner={spiderman_banner}
                  title="Spaderman: Into the spader-verse"
                  handleClick={handleMovieClick}
                />
                <ResMovie
                  banner={spiderman_banner}
                  title="Spaderman: Into the spader-verse"
                  handleClick={handleMovieClick}
                />
              </Suspense>
            </div>
          </div>
        )}
      </>

      <div className="profile field">
        <img
          src={profile_src}
          alt="profile_img"
          onClick={() => {
            setShowProfile((prev) => !prev);
          }}
        />
      </div>
    </header>
  );
};

export default Header;