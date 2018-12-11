import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ElementsState } from '../store/reducers';
import { getSelectedMovies } from '../store/selectors/movie.selector';

@Component({
	selector: 'app-error',
	template: `<div class="error-message" *ngIf="error$|async as error; else loader">{{error.error}}</div>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>`
})

export class ErrorComponent implements OnInit {
	constructor(private store: Store<ElementsState>) { }
	error$: Observable<Error>;

	ngOnInit() {
		this.error$ = this.store.select<any>(getSelectedMovies);
	}
}
