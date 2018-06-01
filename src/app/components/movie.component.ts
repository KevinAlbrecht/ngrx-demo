import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';
import { GetMovieActionError } from '../store/actions';
import { ElementsState } from '../store/reducers';

@Component({
	selector: 'app-movie',
	template: ``
})
export class MovieComponent implements OnInit {
	constructor(private store: Store<ElementsState>) {
	}

	ngOnInit() {
		this.store.dispatch(new GetMovieActionError({ error: 'mince alors' }));
	}
}
