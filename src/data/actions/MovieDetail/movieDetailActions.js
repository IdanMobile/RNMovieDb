import {
  GET_MOVIE_DETAIL,
  CLEAR_MOVIE_DETAIL,
  MOVIE_DETAIL_ERROR,
  ERROR_MOVIE_VIDEO,
  GET_MOVIE_VIDEO,
} from '../../types';
import {getMovieDetail, getMovieVideo} from '../../api/ServiceAPI';
export const getMovieDetails = (itemId) => async (dispatch) => {
  try {
    const res = await getMovieDetail(itemId);
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: MOVIE_DETAIL_ERROR,
      payload: console.log(e),
    });
  }
};

export const clearMovieDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_MOVIE_DETAIL,
      payload: {},
    });
  } catch (e) {
    dispatch({
      type: CLEAR_MOVIE_DETAIL,
      payload: console.log(e),
    });
  }
};

export const getMovieVideos = (movieId) => async (dispatch) => {
  try {
    const res = await getMovieVideo(movieId);
    dispatch({
      type: GET_MOVIE_VIDEO,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MOVIE_VIDEO,
      payload: console.log(e),
    });
  }
};
