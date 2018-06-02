import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';
import { ElementsState } from '../store/reducers';

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
