import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';
import { ElementsState } from '../store/reducers';
import { getAllMovies } from '../store/selectors/movie.selector';
import { GetMovieAction, GetSelectedMovieAction } from '../store/actions/movies.action';
import { getSelectedMovies } from '../store/selectors/movie.selector';
import { Go } from '../router-store/router.action';
import { RouterState, MyRouterStateSnapshot } from '../router-store/router.state';

@Component({
	selector: 'app-movies',
	template: `
	<ng-container>
	{{(selectedMoviesState$|async).error}}
	</ng-container>
	<p class="link link-simple" (click)="goToCat()"><- Back to categories</p>
	<ng-container *ngIf="!(selectedMoviesState$ | async).loading; else loader">
			<app-movies-list [movies]="(selectedMoviesState$ |async).data"></app-movies-list>
	</ng-container>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>
	`
})
export class MoviesComponent implements OnInit {

	selectedMoviesState$: Observable<MoviesState>;

	// Here I got two store because of sample app
	constructor(
		private store: Store<ElementsState>,
		private routerStore: Store<RouterState>) { }

	goToCat() {
		// navigate with effect
		const payload = { path: [''] };
		this.routerStore.dispatch(new Go(payload));
	}

	ngOnInit() {
		this.selectedMoviesState$ = this.store.select<any>(getSelectedMovies);
		this.store.dispatch(new GetSelectedMovieAction());
	}
}


export class Back implements Action {
	readonly type = '[Router] Back';
}
