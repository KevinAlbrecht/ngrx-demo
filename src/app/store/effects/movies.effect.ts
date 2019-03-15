import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as MovieActions from '../actions/movies.action';
import { MyService } from '../../services/my.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getRouter, MyRouterStateSnapshot } from '../../router-store/router.state';

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
			map(action => action.payload),
			switchMap((payload: number) => {
				return this.movieService.getMoviesByCategoryId(payload)
					.pipe(
						catchError(err => of(new MovieActions.GetMoviesActionError(err))));
			}),
			map(movies => new MovieActions.GetSelectedMovieActionSuccess(movies)),
		);
}
