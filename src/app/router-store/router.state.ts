import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

// router state URL
export interface MyRouterStateSnapshot {
	url: string;
	params: Params;
	queryParams: Params;
}

// State
export interface RouterState {
	routerReducerState: RouterReducerState<MyRouterStateSnapshot>;
}

// reducers = lié app module
export const routerReducers: ActionReducerMap<RouterState> = {
	routerReducerState: routerReducer
};

// GetRouterState
export const getRouterState = createFeatureSelector<RouterReducerState<MyRouterStateSnapshot>>('router');
export const getRouter = createSelector(getRouterState, (routerState: any) => routerState.routerReducerState);
