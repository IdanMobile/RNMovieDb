import Axios from 'axios';
import Contants from '../Contants';

export function getMovieList(pageNumber) {
  return Axios.get(
    `${Contants.BaseUrl}trending/movie/day?page=${pageNumber}&api_key=${Contants.API_KEY}`,
  );
}

export function getMovieDetail(itemId) {
  return Axios.get(
    `${Contants.BaseUrl}movie/${itemId}?api_key=${Contants.API_KEY}`,
  );
}

export function searchMovie(query, pageNumber) {
  return Axios.get(
    `${Contants.BaseUrl}search/movie?api_key=${Contants.API_KEY}&query=${query}&page=${pageNumber}`,
  );
}

export function getMovieVideo(movieId) {
  return Axios.get(
    `${Contants.BaseUrl}movie/${movieId}/videos?api_key=${Contants.API_KEY}`,
  );
}
