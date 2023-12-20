import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Favorites from "./Pages/Favorites/Favorites";
import Library from "./Pages/Library/Library";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import TVShows from "./Pages/TVShows/TVShows";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import WatchPage from "./Pages/WatchPage/WatchPage";
import {
  AiringToday,
  MovieCredits,
  MovieDetails,
  MovieImages,
  NowPlaying,
  PopularMovies,
  PopularShows,
  SimilarMovies,
  TopRatedMovies,
  TopRatedShows,
  TrendingMovies,
  UpcomingMovies,
} from "./Data/Data";

async function DataLoader() {
  try {
    const [
      popularMovies,
      topRatedMovies,
      nowPlaying,
      trendingMovies,
      upcomingMovies,
      popularShows,
      topRatedShows,
      airingToday,
    ] = await Promise.all([
      PopularMovies(),
      TopRatedMovies(),
      NowPlaying(),
      TrendingMovies(),
      UpcomingMovies(),
      PopularShows(),
      TopRatedShows(),
      AiringToday(),
    ])
      .then((responses) => responses.map((response) => response.results))
      .catch((err) => {
        console.error("Error fetching data", err);
      });

    return {
      popularMovies,
      topRatedMovies,
      nowPlaying,
      trendingMovies,
      upcomingMovies,
      popularShows,
      topRatedShows,
      airingToday,
    };
  } catch {
    console.error("Unable to fetch data");
  }
}

async function SingleMovieLoader({ params }) {
  const [movieDetails, movieImages, similarMovies, cast] = await Promise.all([
    MovieDetails(params.mediaType, params.id),
    MovieImages(params.mediaType, params.id),
    SimilarMovies(params.mediaType, params.id),
    MovieCredits(params.mediaType, params.id),
  ]);

  return {
    movieDetails,
    movieImages,
    similarMovies,
    cast,
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: DataLoader,
    errorElement: <ErrorPage />,
    id: "root",

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
        path: "library",
        element: <Library />,
      },
      {
        path: "/:mediaType/:id",
        loader: SingleMovieLoader,
        element: <SingleMovie />,
      },
      {
        path: "watch/:id",
        element: <WatchPage />,
      },
    ],
  },
]);
