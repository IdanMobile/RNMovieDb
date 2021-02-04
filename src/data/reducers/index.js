import {combineReducers} from 'redux';
import movieDetailReducer from './MovieDetail/movieDetailReducer';
// import MovieDetailStore from '../mobx/MovieDetails';

import movieListReducer from './MovieList/movieListReducer';

export default combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailReducer,
});
