import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';
export const GO_TO_ERROR = '[Router] GoToError';

export class Go implements Action {
	readonly type = GO;

	constructor(public payload: {
		path: any[];
		query?: object;
		extras?: NavigationExtras;
	}) { }
}

export class Back implements Action {
	readonly type = BACK;
}

export class Forward implements Action {
	readonly type = FORWARD;
}

export class GoToError implements Action {
	readonly type = GO_TO_ERROR;
}

export type Actions
	= Go
	| Back
	| Forward
	| GoToError;
