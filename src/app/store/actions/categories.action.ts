import { Action } from '@ngrx/store';

// Les types des differentes actions
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR';

// Les actions
export class GetCategoriesAction implements Action {
	readonly type = GET_CATEGORIES;
}

export class GetCategoriesActionSuccess implements Action {
	readonly type = GET_CATEGORIES_SUCCESS;
	constructor(public payload: any) { }
}

export class GetCategoriesActionError implements Action {
	readonly type = GET_CATEGORIES_ERROR;
	constructor(public payload: any) { }
}

export class GetCategoryAction implements Action {
	readonly type = GET_CATEGORY;
}

export class GetCategoryActionSuccess implements Action {
	readonly type = GET_CATEGORY_SUCCESS;
	constructor(public payload: any) { }
}

export class GetCategoryActionError implements Action {
	readonly type = GET_CATEGORY_ERROR;
	constructor(public payload: any) { }
}

export type CategoriesActionTypes =
	GetCategoryAction | GetCategoryActionError | GetCategoryActionSuccess |
	GetCategoriesAction | GetCategoriesActionError | GetCategoriesActionSuccess;
