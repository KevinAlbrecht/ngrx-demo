import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';

@Component({
	selector: 'app-movies-list',
	template: `<ul>
				<li *ngFor="let movie of movies">
				<p>Title: {{movie.title}}</p>
				<p>Année: {{movie.RecordedYear}}</p>
				<p>Acteur: {{movie.actors[0].firstName +' - ' + movie.actors[0].lastName}}</p>
				<p>Language: {{movie.language}}</p>
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
