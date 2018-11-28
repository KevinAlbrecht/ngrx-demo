import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../../router-store/router.state';
import { ElementsState } from '../reducers';
import { getElementsState } from '.';
import { getMovies, getMoviesLoading, MoviesState } from '../reducers/movies.reducer';
import { DictionaryUtils, Movie } from '../../models';

// moviesState selector
const getMoviesState = createSelector(getElementsState, (state: ElementsState) => state.movies);

///
// Example : if we wanted to retrieve movies and url params in one selector.
///
// export const getSelectedMoviesState = createSelector(getElementsState, getRouterState, (state: ElementsState, router: any) => {
// 	return { route: (router ? router.routerReducerState.state : null), movies: state.movies };
// });

// data selectors
export const getAllMovies = createSelector(getMoviesState, getMovies);
export const getAllMoviesLoading = createSelector(getMoviesState, getMoviesLoading);
export const getSelectedMovies = createSelector(getMoviesState, (state: MoviesState) => {
	const entities = DictionaryUtils.toArray<Movie>(state.data);
	return { ...state, data: entities };
});
