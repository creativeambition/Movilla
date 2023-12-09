import { axiosInstance } from "./axios";

const apiKey = "6092a82e2b44efc996cd82a308128338";

// Movies
export async function PopularMovies() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function TopRatedMovies() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function NowPlaying() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function TrendingMovies() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/trending/all/week?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function UpcomingMovies() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

// Shows
export async function PopularShows() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function TopRatedShows() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}

export async function AiringToday() {
  try {
    console.log("fetching movies...");
    const response = await axiosInstance.get(
      `/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log("An error occurred while fetching movies", error);
  }
}
