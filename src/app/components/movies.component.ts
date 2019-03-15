import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { ElementsState } from '../store/reducers';
import { GetSelectedMovieAction } from '../store/actions/movies.action';
import { getSelectedMovies } from '../store/selectors/movie.selector';
import { Go } from '../router-store/router.action';
import { RouterState } from '../router-store/router.state';

@Component({
	selector: 'app-movies',
	template: `
	<p class="link link-simple" (click)="goToCat()">< Back to categories</p>
	<ng-container *ngIf="selectedMoviesState$|async as state">
	<ng-container *ngIf="!state.loading; else loader">
		<ng-container *ngIf="!state.error;else error">
		<app-movies-list [movies]="state.data"></app-movies-list></ng-container>
		</ng-container>
	</ng-container>

	<ng-template #error>
		{{state.error|json}}
	</ng-template>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>
	`
})
export class MoviesComponent implements OnInit {

	selectedMoviesState$: Observable<MoviesState>;

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
