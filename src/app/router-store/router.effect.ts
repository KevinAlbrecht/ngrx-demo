import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { GO, FORWARD, BACK } from './router.action';


@Injectable()
export class CategoriesEffect {
	constructor(
		private actions$: Actions,
		private router: Router) { }
	@Effect({ dispatch: false })
	navigation$ = this.actions$.ofType('ROUTER_NAVIGATION')
		.pipe(
			tap((action) => {
				console.log('native router navigation action', action);
			}));

	@Effect({ dispatch: false })
	CustomGoNavigation$ = this.actions$.ofType(GO)
		.pipe(
			tap((action) => {
				console.log('custom navigation GO action', action);
			}));

	@Effect({ dispatch: false })
	CustomForwardNavigation$ = this.actions$.ofType(FORWARD)
		.pipe(
			tap((action) => {
				console.log('custom navigation FORWARD action', action);
			}));

	@Effect({ dispatch: false })
	CustomBackNavigation$ = this.actions$.ofType(BACK)
		.pipe(
			tap((action) => {
				console.log('custom navigation BACK action', action);
			}));
}
