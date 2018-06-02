import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from '../store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';
import { ElementsState } from '../store/reducers';
import * as CategorySelectors from '../store/selectors/category.selector';
import { Category, CategoryState } from '../models';
import { GetCategoriesAction } from '../store/actions';
import { Router } from '@angular/router';

@Component({
	selector: 'app-categories',
	template: `
		<h3>Choose a category</h3>
		<ng-container *ngIf="!(categoriesState$ | async).loading; else loader">
		<p class="link" *ngFor="let category of (categoriesState$ | async).data" (click)="goToCategory(category.id)">
			{{category.title}}
		</p>
		</ng-container>
		<ng-template #loader>
			<div class="loader"></div>
		</ng-template>
		`
})
export class CategoriesComponent implements OnInit {
	constructor(
		private store: Store<ElementsState>,
		private router: Router) {
	}

	categoriesState$: Observable<CategoryState>;

	goToCategory(id: number) {
		// usual navigation
		this.router.navigate([`category/${id}`]);
	}

	ngOnInit() {
		this.categoriesState$ =
			this.store.select<CategoryState>(CategorySelectors.getAllCategoriesState);

		this.store.dispatch(new GetCategoriesAction());
	}
}
