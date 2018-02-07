import { MoviesState, reducer, getMovies, getMoviesLoading } from './movies.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

// State de notre feature
export interface ElementsState {
  movies: MoviesState;
}

// Reducers pour notre state
export const reducers: ActionReducerMap<ElementsState> = {
  movies: reducer
};

// ________selectors_________

// globalState
export const getElementsState = createFeatureSelector<ElementsState>('elements');

// moviesState
export const getMoviesState = createSelector(getElementsState, (state: ElementsState) => state.movies);

// pure datas
export const getAllMovies = createSelector(getMoviesState, getMovies);
export const getAllMoviesLoading = createSelector(getMoviesState, getMoviesLoading);
