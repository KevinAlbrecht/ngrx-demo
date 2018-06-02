import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap, tap, withLatestFrom, first, combineLatest, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as MovieActions from '../actions/movies.action';
import { MyService } from '../../services/my.service';
import { Action, Store } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ElementsState } from '../reducers';
import { getRouterState, getRouter, MyRouterStateSnapshot } from '../../router-store/router.state';

@Injectable()
export class MovieEffect {
	constructor(
		private actions$: Actions,
		private movieService: MyService,
		private router: Router,
		private store: Store<MyRouterStateSnapshot>) { }



	@Effect()
	selectedMovies$ = this.actions$.ofType(MovieActions.GET_SELECTED_MOVIE)
		.pipe(
			withLatestFrom(
				this.store.select<any>(getRouter),
				(action, payload) => {
					if (!payload.state.params['categoryId']) {
						throw { message: 'no category Id given' };
					}
					return {
						action: action,
						payload: payload.state.params['categoryId']
					};
				}),
			switchMap((newPayload: { action: Action, payload: number }) => {
				return this.movieService.getMoviesByCategoryId(newPayload.payload)
					.pipe(
						map(movies => {
							return new MovieActions.GetSelectedMovieActionSuccess(movies);
						}),
						catchError(err => of(new MovieActions.GetMovieActionError(err)))
					);
			}));


	@Effect()
	loadMoviesError$ = this.actions$.ofType(MovieActions.GET_MOVIES_ERROR)
		.pipe(tap(action => this.router.navigate([''])));
}
