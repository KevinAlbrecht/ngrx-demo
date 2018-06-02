import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { GO, FORWARD, BACK, Go, Back } from './router.action';


@Injectable()
export class RouterEffect {
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
			tap((action: Go) => {
				this.router.navigate(action.payload.path, { queryParams: action.payload.query, ...action.payload.extras });
			}));

	@Effect({ dispatch: false })
	CustomBackNavigation$ = this.actions$.ofType(BACK)
		.pipe(
			tap((action: Back) => {
				// or you can wrap the window reference and inject as angularJS does it natively with $window.
				window.history.back();
			}));

	@Effect({ dispatch: false })
	CustomForwardNavigation$ = this.actions$.ofType(FORWARD)
		.pipe(
			tap((action) => {
				window.history.forward();
			}));


}
