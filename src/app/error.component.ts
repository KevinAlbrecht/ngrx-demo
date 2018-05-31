import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState } from './store/reducers/reducer';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction, GetMovieActionError } from './store/actions/action';

@Component({
	selector: 'app-error',
	template: `err`
})
export class ErrorComponent implements OnInit {
	constructor(private store: Store<ElementsState>) {
	}

	ngOnInit() {
	}
}
