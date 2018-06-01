import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';
import { ElementsState } from '../store/reducers';
import { getAllMovies } from '../store/selectors/movie.selector';
import { GetMovieAction, GetSelectedMovieAction } from '../store/actions/movies.action';
import { getSelectedMovies } from '../store/selectors/movie.selector';

@Component({
	selector: 'app-movies',
	template: `
	<ng-container>
	{{(selectedMoviesState$|async).error}}
	</ng-container>
	<ng-container *ngIf="!(selectedMoviesState$ | async).loading; else loader">
		<div class="wrapper">
			<app-movies-list [movies]="(selectedMoviesState$ |async).data"></app-movies-list>
		</div>
	</ng-container>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>
	`
})
export class MoviesComponent implements OnInit {

	selectedMoviesState$: Observable<MoviesState>;

	constructor(private store: Store<ElementsState>) { }

	ngOnInit() {
		this.selectedMoviesState$ = this.store.select<any>(getSelectedMovies);
		this.store.dispatch(new GetSelectedMovieAction());
	}
}


export class Back implements Action {
	readonly type = '[Router] Back';
}
