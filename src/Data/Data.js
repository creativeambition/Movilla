import { axiosInstance } from "./axios";

const apiKey = "6092a82e2b44efc996cd82a308128338";

// Movies
export async function PopularMovies() {
  try {
    console.log("fetching popular movies...");
    const response = await axiosInstance.get(
      `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function TopRatedMovies() {
  try {
    console.log("fetching top-rated movies...");
    const response = await axiosInstance.get(
      `/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function NowPlaying() {
  try {
    console.log("fetching now-playing movies...");
    const response = await axiosInstance.get(
      `/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function TrendingMovies() {
  try {
    console.log("fetching trending movies...");
    const response = await axiosInstance.get(
      `/trending/all/week?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function UpcomingMovies() {
  try {
    console.log("fetching upcoming movies...");
    const response = await axiosInstance.get(
      `/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

// Shows
export async function PopularShows() {
  try {
    console.log("fetching popular shows...");
    const response = await axiosInstance.get(
      `/tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function TopRatedShows() {
  try {
    console.log("fetching top-rated shows...");
    const response = await axiosInstance.get(
      `/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function AiringToday() {
  try {
    console.log("fetching airing today...");
    const response = await axiosInstance.get(
      `/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

// Others

export async function getGenreList(ids) {
  try {
    const response = await axiosInstance.get(
      `/genre/movie/list?api_key=${apiKey}`
    );
    let genres = response.data.genres;
    let list = [];

    for (let i = 0; i < genres.length; i++) {
      if (ids.includes(genres[i].id)) {
        list.push(genres[i]);
      }
    }

    return list;
  } catch (error) {
    console.log("Error getting genre list");
  }
}

// Single Movie Page

export async function MovieDetails(movieId) {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movie details", error);
  }
}

export async function MovieImages(movieId) {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/images?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movie details", error);
  }
}

export async function MovieVideos(movieId) {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/videos?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movie details", error);
  }
}

export async function SimilarMovies(movieId) {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/similar?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movie details", error);
  }
}

export async function MovieCredits(movieId) {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/credits?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred while fetching movie details", error);
  }
}
