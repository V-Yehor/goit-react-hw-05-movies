import axios from 'axios';
const APIKEY = 'baf910428decb74848b61b3b149dee01';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/week?api_key=${APIKEY}`);
  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${APIKEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getAllMovieInfo = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${APIKEY}&language=en-US`
  );
  return data;
};

export const getMovieActors = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
  return data.results;
};
