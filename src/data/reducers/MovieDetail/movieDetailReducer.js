import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_VIDEO,
  ERROR_MOVIE_VIDEO,
  CLEAR_MOVIE_DETAIL,
} from '../../types';

const initialState = {
  movieDetail: {},
  loading: true,
  movieVideo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
        loading: false,
      };

    case CLEAR_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {},
        loading: false,
        movieVideo: [],
      };

    case GET_MOVIE_VIDEO:
      return {
        ...state,
        movieVideo: action.payload.results,
        loading: false,
      };

    case ERROR_MOVIE_VIDEO:
      return {
        ...state,
        movieVideo: [],
        loading: false,
      };

    default:
      return state;
  }
}
