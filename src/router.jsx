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
  Popular,
  SimilarMovies,
  TopRated,
  Trending,
  Upcoming,
  WatchTrailer,
  fetchGenres,
  fetchSingleGenreMovies,
} from "./Data/Data";
import GenreMovies from "./Pages/GenreMovies/GenreMovies";

async function DataLoader() {
  try {
    const [
      popularMovies,
      topRatedMovies,
      nowPlaying,
      trending,
      upcoming,
      popularShows,
      topRatedShows,
      airingToday,
    ] = await Promise.all([
      Popular("movie"),
      TopRated("movie"),
      NowPlaying(),
      Trending(),
      Upcoming(),
      Popular("tv"),
      TopRated("tv"),
      AiringToday(),
    ]);

    return {
      popularMovies,
      topRatedMovies,
      nowPlaying,
      trending,
      upcoming,
      popularShows,
      topRatedShows,
      airingToday,
    };
  } catch {
    return null;
  }
}

async function SingleMovieLoader({ params }) {
  try {
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
  } catch {
    return null;
  }
}

async function SingleGenreMoviesLoader({ params }) {
  try {
    let genres = await fetchGenres(params.mediaType);

    let genre = genres.find(
      (genre) => genre.name.toLowerCase() == params.genre.toLowerCase()
    );

    const genreId = genre.id;

    return await fetchSingleGenreMovies(genreId, params.mediaType);
  } catch {
    return null;
  }
}

async function WatchPageLoader({ params }) {
  try {
    return WatchTrailer(params.mediaType, params.id);
  } catch (error) {
    return error;
  }
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
        path: "tv",
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
        path: "/:mediaType/all/:genre",
        element: <GenreMovies />,
        loader: SingleGenreMoviesLoader,
      },
      {
        path: "/watch/:mediaType/:title/:id",
        element: <WatchPage />,
        loader: WatchPageLoader,
      },
    ],
  },
]);
