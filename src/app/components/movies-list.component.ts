import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';

@Component({
	selector: 'app-movies-list',
	template: `<ul>
				<li *ngFor="let movie of movies" class="movie-bloc">
				<span class="desc">Title:</span>
				<p> {{movie.title}}</p>
				<span class="desc">Year:</span>
				<p> {{movie.RecordedYear}}</p>
				<span class="desc">Special mention:</span>
				<p> {{movie.specialMention.firstName +' - ' + movie.specialMention.lastName}}</p>
				<span class="desc">Language:</span>
				<p> {{movie.language}}</p>
				</li>
            </ul>`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {

	@Input()
	movies: Movie[];

	constructor() {
	}
}
