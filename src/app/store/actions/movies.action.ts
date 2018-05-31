import { Action } from '@ngrx/store';

// Les types des differentes actions
export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

// Les actions
export class GetMovieAction implements Action {
	readonly type = GET_MOVIE;
}

export class GetMovieActionSuccess implements Action {
	readonly type = GET_MOVIE_SUCCESS;
	constructor(public payload: any) { }
}

export class GetMovieActionError implements Action {
	readonly type = GET_MOVIE_ERROR;
	constructor(public payload: any) { }
}

export class GetMoviesAction implements Action {
	readonly type = GET_MOVIES;
}

export class GetMoviesActionSuccess implements Action {
	readonly type = GET_MOVIES_SUCCESS;
	constructor(public payload: any) { }
}

export class GetMoviesActionError implements Action {
	readonly type = GET_MOVIES_ERROR;
	constructor(public payload: any) { }
}

export type MoviesActionTypes =
	GetMovieAction | GetMovieActionError | GetMovieActionSuccess |
	GetMoviesAction | GetMoviesActionError | GetMoviesActionSuccess;
