import {
  GET_TRENDING_MOVIE,
  SEARCH_MOVIE,
  TRENDING_MOVIE_ERROR,
} from '../../types';
import {getMovieList, searchMovie} from '../../api/ServiceAPI';

export const getTrendingMovie = (pageNumber) => async (dispatch) => {
  try {
    const res = await getMovieList(pageNumber);
    dispatch({
      type: GET_TRENDING_MOVIE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: TRENDING_MOVIE_ERROR,
      payload: console.log(e),
    });
  }
};

export const searchMovieList = (query, page) => async (dispatch) => {
  try {
    const res = await searchMovie(query, page);
    dispatch({
      type: SEARCH_MOVIE,
      payload: {query: query, ...res.data},
    });
  } catch (e) {
    dispatch({
      type: TRENDING_MOVIE_ERROR,
      payload: console.log(e),
    });
  }
};
