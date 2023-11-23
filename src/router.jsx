import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Favorites from "./Pages/Favorites/Favorites";
import Library from "./Pages/Library/Library";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import TVShows from "./Pages/TVShows/TVShows";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

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
        element: <Favorites />,
      },
      {
        path: "lib",
        element: <Library />,
      },
      {
        path: "movie/:id",
        element: <SingleMovie />,
      },
    ],
  },
]);
