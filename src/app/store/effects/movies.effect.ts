import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as MovieActions from '../actions/action';
import { MovieService } from '../../services/movie.service';

@Injectable()
export class MovieEffect {
  constructor(
    private actions$: Actions,
    private movieService: MovieService) { }

  @Effect()
  loadMovies$ = this.actions$.ofType(MovieActions.GET_MOVIES)
    .pipe(
    switchMap((action) => {
      return this.movieService.getMovies()
        .pipe(
        map(movies => new MovieActions.GetMovieActionSuccess(movies)),
        catchError(err => of(new MovieActions.GetMovieActionError(err)))
        );
    }));
}
