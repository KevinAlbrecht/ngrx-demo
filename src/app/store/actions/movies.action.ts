import { Action } from '@ngrx/store';

// Les types des differentes actions
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

// Les actions
export class GetMovieAction implements Action {
  readonly type = GET_MOVIES;
}

export class GetMovieActionSuccess implements Action {
  readonly type = GET_MOVIES_SUCCESS;
  constructor(public payload: any) { }
}

export class GetMovieActionError implements Action {
  readonly type = GET_MOVIES_ERROR;
  constructor(public payload: any) { }
}
