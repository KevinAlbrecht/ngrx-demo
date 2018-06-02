import { ActionReducerMap } from '@ngrx/store';
import * as moviesReducer from './movies.reducer';
import * as categoriesReducer from './categories.reducer';

// State de notre feature
export interface ElementsState {
	movies: moviesReducer.MoviesState;
	categories: categoriesReducer.CategoriesState;
}

// Reducers pour notre state
export const reducers: ActionReducerMap<ElementsState> = {
	movies: moviesReducer.reducer,
	categories: categoriesReducer.reducer
};
