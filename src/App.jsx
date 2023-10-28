import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { SharedContext } from "./SharedContext";

import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Profile from "./components/Profile/Profile";
const MobileNav = lazy(() => import("./components/MobileNavigation/MobileNav"));

function App() {
  const [theme, settheme] = useState("default");
  const [mobileView, setmobileView] = useState(false);
  const [NavActive, setNavActive] = useState(false);
  const [ThemeOptions, setThemeOptions] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const themes = document.querySelectorAll(".theme_colors .theme");

    themes.forEach((it) => {
      it.addEventListener("click", () => {
        settheme(it.getAttribute("data-theme"));
      });
    });
  });

  function checkWindow() {
    if (window.innerWidth <= 600) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }
  useEffect(() => {
    checkWindow();

    window.addEventListener("resize", () => {
      checkWindow();
    });
  }, []);

  function toggle() {
    if (NavActive) {
      setNavActive(false);
    }

    if (ThemeOptions) {
      setThemeOptions(false);
    }

    if (ShowProfile) {
      setShowProfile(false);
    }
  }

  return (
    <div
      className={`app ${theme}_theme ${
        (NavActive || ShowProfile) && "drop_blinds"
      }`}
    >
      <SharedContext.Provider
        value={{
          mobileView,
          NavActive,
          setNavActive,
          ThemeOptions,
          setThemeOptions,
          ShowProfile,
          setShowProfile,
        }}
      >
        {mobileView ? (
          <Suspense fallback="">
            <MobileNav />
          </Suspense>
        ) : (
          <Navigation />
        )}

        <main>
          <div className="blinds" onClick={toggle}></div>

          <Header />
          <Profile />

          <Outlet />
        </main>
      </SharedContext.Provider>
    </div>
  );
}

export default App;
