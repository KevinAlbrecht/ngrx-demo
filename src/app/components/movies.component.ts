import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';
import { ElementsState } from '../store/reducers';
import { getAllMovies } from '../store/selectors/movie.selector';
import { GetMovieAction } from '../store/actions/movies.action';

@Component({
	selector: 'app-movies',
	template: `
	<!--<ng-container *ngIf="!(moviesState$ | async).loading; else loader">>
	<app-movies-list [movies]="(moviesState$ |async).data"></app-movies-list>
	</ng-container>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>-->
	<div class="loader"></div>
	`
})
export class MoviesComponent implements OnInit {

	moviesState$: Observable<MoviesState>;

	constructor(private store: Store<ElementsState>) { }

	ngOnInit() {
		// this.moviesState$ = this.store.select<any>(getSelectedMoviesState);
	}
}


export class Back implements Action {
	readonly type = '[Router] Back';
}
