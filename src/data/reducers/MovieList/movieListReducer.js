import {GET_TRENDING_MOVIE, SEARCH_MOVIE} from '../../types';

const initialState = {
  movie: [],
  page: 1,
  loading: true,
  isSearch: false,
  searchText: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRENDING_MOVIE: {
      let data = [];
      if (action.payload.page > 1) {
        data = [...state.movie, ...action.payload.results];
      } else {
        data = action.payload.results;
      }
      return {
        ...state,
        movie: data,
        page: action.payload.page,
        loading: false,
        isSearch: false,
        searchText: '',
      };
    }
    case SEARCH_MOVIE: {
      let data = [];
      if (action.payload.page > 1) {
        data = [...state.movie, ...action.payload.results];
      } else {
        data = action.payload.results;
      }
      return {
        ...state,
        movie: data,
        searchText: action.payload.query,
        page: action.payload.page,
        isSearch: true,
        loading: false,
      };
    }
    default:
      return state;
  }
}
