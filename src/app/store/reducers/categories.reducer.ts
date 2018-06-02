import * as actions from '../actions';
import * as models from '../../models/index';
import { CategoriesActionTypes } from '../actions/categories.action';
import { DictionaryUtils, Category } from '../../models/index';

// State Type
export interface CategoriesState {
	data: { [id: number]: models.Category };
	loading: boolean;
	error: string;
}

// Initial state
export const initialState: CategoriesState = {
	data: {},
	loading: false,
	error: ''
};

// REDUCER
export function reducer(
	state = initialState,
	action: CategoriesActionTypes
): CategoriesState {
	switch (action.type) {
		case actions.GET_CATEGORY:
		case actions.GET_CATEGORIES: {
			return {
				...state,
				loading: true
			};
		}
		case actions.GET_CATEGORY_ERROR:
		case actions.GET_CATEGORIES_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload
			};
		}
		case actions.GET_CATEGORY_SUCCESS:
		case actions.GET_CATEGORIES_SUCCESS: {
			const entities = models.DictionaryUtils.toDictionnary<models.Category>(action.payload);
			return {
				...state,
				loading: false,
				data: entities
			};
		}
	}

	return state;
}

// Sub selectors...
export const getIsCategoriesLoading = (state: CategoriesState) => state.loading;
export const getAllCategories = (state: CategoriesState): Category[] => {
	return DictionaryUtils.toArray(state.data);
};
