import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../../router-store/router.state';
import { ElementsState } from '../reducers';
import { getElementsState } from '.';
import { getMovies, getMoviesLoading } from '../reducers/movies.reducer';

// ________selectors_________

// moviesState
const getMoviesState = createSelector(getElementsState, (state: ElementsState) => state.movies);

// movie & routeParams
// export const getSelectedMoviesState = createSelector(getElementsState, getRouterState, (state: ElementsState, router: any) => {
// 	return { route: (router ? router.routerReducerState.state : null), movies: state.movies };
// });

// export const getSelectedMoviesState = createSelector(getMoviesState)

// pure datas
export const getAllMovies = createSelector(getMoviesState, getMovies);
export const getAllMoviesLoading = createSelector(getMoviesState, getMoviesLoading);
