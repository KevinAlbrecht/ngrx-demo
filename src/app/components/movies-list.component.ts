import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
	selector: 'app-movies-list',
	template: `
	<div class="movies-wrapper">
		<div *ngFor="let movie of movies" class="movie-bloc" [style.background-image]="'url(/assets/images/'+movie.picto+')'">
			<div class="hidden-text">
				<p> {{movie.RecordedYear}}</p>
				<span class="desc">Special mention:</span>
				<p> {{movie.specialMention.firstName +' - ' + movie.specialMention.lastName}}</p>
				<span class="desc">Language:</span>
				<p> {{movie.language}}</p>
			</div>
			<div class="clear-text">
				<p> {{movie.title}}</p>
			</div>
		</div>
	</div>`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {

	@Input()
	movies: Movie[];

	constructor() {
	}
}
