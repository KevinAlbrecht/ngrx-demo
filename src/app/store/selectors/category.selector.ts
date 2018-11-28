import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../../router-store/router.state';
import { ElementsState } from '../reducers';
import * as CategoriesReducer from '../reducers/categories.reducer';
import { getElementsState } from '.';
import { DictionaryUtils, Category } from '../../models';

// state selectors
export const getCategoriesState = createSelector(getElementsState, (state: ElementsState) => state.categories);

// data selectors
export const getAllCategories = createSelector(getCategoriesState, CategoriesReducer.getAllCategories);
export const getAllCategoriesLoading = createSelector(getCategoriesState, CategoriesReducer.getIsCategoriesLoading);
export const getAllCategoriesState = createSelector(getCategoriesState, (state: CategoriesReducer.CategoriesState) => {
	const entities = DictionaryUtils.toArray<Category>(state.data);
	return { ...state, data: entities };
});
