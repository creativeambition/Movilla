import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./RoutePages/Home/Home";
import Movies from "./RoutePages/Movies/Movies";
import Fav from "./RoutePages/Favorites/Fav";
import Lib from "./RoutePages/Library/Lib";
import SingleMovie from "./RoutePages/SingleMovie/SingleMovie";
import TVShows from "./RoutePages/TVShows/TVShows";
import Error from "./RoutePages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "tv-shows",
        element: <TVShows />,
      },
      {
        path: "favorites",
        element: <Fav />,
      },
      {
        path: "lib",
        element: <Lib />,
      },
      {
        path: "movie/:id",
        element: <SingleMovie />,
      },
    ],
  },
]);
