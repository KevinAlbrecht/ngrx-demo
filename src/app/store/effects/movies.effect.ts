import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as MovieActions from '../actions/movies.action';
import * as RouterActions from '../actions/router.action';
import { MyService } from '../../services/movie.service';
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieEffect {
	constructor(
		private actions$: Actions,
		private movieService: MyService,
		private router: Router) { }

	@Effect({ dispatch: false })
	loadMovies$ = this.actions$.ofType('ROUTER_NAVIGATION')
		.pipe(
			map((action) => {
				// const categoryId = action.payload.query['categorieId'];
				console.log("catId", action);
				// return this.movieService.getMoviesByCategoryId(categoryId)
				// 	.pipe(
				// 		map(movies => new MovieActions.GetMovieActionSuccess(movies)),
				// 		catchError(err => of(new MovieActions.GetMovieActionError(err)))
				// 	);
			}));

	// @Effect()
	// selectMovies$ = this.actions$.ofType(.GET_MOVIES)
	// 	.pipe(
	// 		switchMap((action) => {
	// 			return this.movieService.getMovies()
	// 				.pipe(
	// 					map(movies => new MovieActions.GetMovieActionSuccess(movies)),
	// 					catchError(err => of(new MovieActions.GetMovieActionError(err)))
	// 				);
	// 		}));


	@Effect()
	loadMoviesError$ = this.actions$.ofType(MovieActions.GET_MOVIES_ERROR)
		.pipe(tap(action => this.router.navigate([''])));
}
