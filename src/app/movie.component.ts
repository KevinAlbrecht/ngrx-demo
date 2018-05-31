import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState } from './store/reducers/reducer';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction, GetMovieActionError } from './store/actions/action';

@Component({
	selector: 'app-movie',
	template: ``
})
export class MovieComponent implements OnInit {
	constructor(private store: Store<ElementsState>) {
	}

	ngOnInit() {
		console.log("lol")
		this.store.dispatch(new GetMovieActionError({ error: "mince alors" }));
	}
}
