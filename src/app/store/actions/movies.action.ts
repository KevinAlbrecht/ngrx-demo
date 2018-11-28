import { Action } from '@ngrx/store';

// Les types des differentes actions

// Unimplemented examples
export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

export const GET_SELECTED_MOVIE = 'GET_SELECTED_MOVIE';
export const GET_SELECTED_MOVIE_SUCCESS = 'GET_SELECTED_MOVIE_SUCCESS';

// Implemented examples
export const GET_MOVIES_BY_CATEGORY_ID = 'GET_MOVIES_BY_CATEGORY_ID';
export const GET_MOVIES_BY_CATEGORY_ID_SUCCESS = 'GET_MOVIES_BY_CATEGORY_ID_SUCCESS';
export const GET_MOVIES_BY_CATEGORY_ID_ERROR = 'GET_MOVIES_BY_CATEGORY_ID_ERROR';

// Les actions
export class GetMoviesOfCategoryIdAction implements Action {
	readonly type = GET_MOVIES_BY_CATEGORY_ID;
}
export class GetMoviesOfCategoryIdSuccessAction implements Action {
	readonly type = GET_MOVIES_BY_CATEGORY_ID_SUCCESS;
	constructor(public payload: any) { }

}
export class GetMoviesOfCategoryIdErrorAction implements Action {
	readonly type = GET_MOVIES_BY_CATEGORY_ID_ERROR;
	constructor(public payload: any) { }
}

export type MoviesActionTypes = GetMoviesOfCategoryIdAction | GetMoviesOfCategoryIdSuccessAction | GetMoviesOfCategoryIdErrorAction;
