import { axiosInstance } from "./axios";

const apiKey = "6092a82e2b44efc996cd82a308128338";

// Movies
export async function PopularMovies() {
  try {
    const response = await axiosInstance.get(
      `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

export async function TopRatedMovies() {
  try {
    const response = await axiosInstance.get(
      `/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

export async function NowPlaying() {
  try {
    const response = await axiosInstance.get(
      `/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

export async function TrendingMovies() {
  try {
    const response = await axiosInstance.get(
      `/trending/all/week?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

export async function UpcomingMovies() {
  try {
    const response = await axiosInstance.get(
      `/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

// TV Shows
export async function PopularShows() {
  try {
    const response = await axiosInstance.get(
      `/tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

export async function TopRatedShows() {
  try {
    const response = await axiosInstance.get(
      `/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

export async function AiringToday() {
  try {
    const response = await axiosInstance.get(
      `/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log("An error occurred =>", error);
  }
}

// Others
export async function getGenreList(ids, mediaType) {
  try {
    const response = await axiosInstance.get(
      `/genre/${mediaType}/list?api_key=${apiKey}`
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
    console.log("Error getting genre list", error);
  }
}

// Single Movie Page
export async function MovieDetails(mediaType, id) {
  try {
    const response = await axiosInstance.get(
      `/${mediaType}/${id}?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred => while fetching movie details", error);
  }
}

export async function MovieImages(mediaType, id) {
  try {
    const response = await axiosInstance.get(
      `/${mediaType}/${id}/images?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred => while fetching movie details", error);
  }
}

export async function MovieVideos(mediaType, id) {
  try {
    const response = await axiosInstance.get(
      `/${mediaType}/${id}/videos?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred => while fetching movie details", error);
  }
}

export async function SimilarMovies(mediaType, id) {
  try {
    const response = await axiosInstance.get(
      `/${mediaType}/${id}/similar?api_key=${apiKey}`
    );

    return response.data.results;
  } catch (error) {
    console.log("An error occurred => while fetching movie details", error);
  }
}

export async function MovieCredits(mediaType, id) {
  try {
    const response = await axiosInstance.get(
      `/${mediaType}/${id}/credits?api_key=${apiKey}`
    );

    return response.data;
  } catch (error) {
    console.log("An error occurred => while fetching movie details", error);
  }
}
