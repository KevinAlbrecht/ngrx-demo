import { Movie } from '../../models/movie.model';
import * as MovieActions from '../actions/action';

// State Type
export interface MoviesState {
  data: Movie[];
  loading: boolean;
  error: string;
}

// Initial state
export const initialState: MoviesState = {
  data: [],
  loading: false,
  error: ''
};

// REDUCER
export function reducer(
  state = initialState,
  action: MovieActions.GetMovieAction | MovieActions.GetMovieActionError | MovieActions.GetMovieActionSuccess
): MoviesState {
  switch (action.type) {
    case MovieActions.GET_MOVIES: {
      return {
        ...state,
        loading: true
      };
    }
    case MovieActions.GET_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case MovieActions.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
  }

  return state;
}

// Sub selectors...
export const getMoviesLoading = (state: MoviesState) => state.loading;
export const getMovies = (state: MoviesState) => state.data;
