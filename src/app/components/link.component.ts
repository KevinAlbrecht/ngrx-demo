import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';

@Component({
	selector: 'app-link',
	template: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
	constructor() {
	}
}
