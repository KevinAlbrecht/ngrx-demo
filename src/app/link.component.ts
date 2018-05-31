import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState } from './store/reducers/reducer';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction } from './store/actions/action';

@Component({
	selector: 'app-link',
	template: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
	constructor() {
	}
}
