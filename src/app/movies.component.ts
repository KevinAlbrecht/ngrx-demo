import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState, getSelectedMoviesState } from './store/reducers/reducer';
import { Store, Action } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction } from './store/actions/action';

@Component({
	selector: 'app-movies',
	template: `
	{{movies$|async|json}}
	<h2>There is {{(movies$|async).data.length}} movies</h2>
	<span [hidden]="!(movies$|async).loading">Loading...</span>
	<span>{{(movies$|async).error}}</span>
	<app-movies-list [hidden]="(movies$|async).loading" [movies]="(movies$ |async).data"></app-movies-list>
	<router-outlet></router-outlet>
	`
})
export class MoviesComponent implements OnInit {

	movies$: Observable<MoviesState>;
	route$: Observable<any>;

	constructor(private store: Store<ElementsState>) { }

	ngOnInit() {
		// this.store.dispatch(new Back());
		this.movies$ = this.store.select<MoviesState>(getMoviesState);
		this.route$ = this.store.select<any>(getSelectedMoviesState);
		this.store.dispatch(new GetMovieAction());
	}
}


export class Back implements Action {
	readonly type = '[Router] Back';
}
