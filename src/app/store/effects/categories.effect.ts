import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as CategoriesActions from '../actions/categories.action';
import { MyService } from '../../services/my.service';
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../models';

@Injectable()
export class CategoriesEffect {
	constructor(
		private actions$: Actions,
		private myService: MyService,
		private router: Router) { }

	@Effect()
	loadCategories$ = this.actions$.ofType(CategoriesActions.GET_CATEGORIES)
		.pipe(
			switchMap((action) => {
				return this.myService.getCategories()
					.pipe(
						map(movies => new CategoriesActions.GetCategoriesActionSuccess(movies)),
						catchError(err => of(new CategoriesActions.GetCategoriesActionError(err)))
					);
			}));

	@Effect()
	loadCategoriesError$ = this.actions$.ofType(CategoriesActions.GET_CATEGORIES_ERROR)
		.pipe(tap(action => this.router.navigate([''])));
}
