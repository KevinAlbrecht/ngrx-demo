import { createFeatureSelector } from '@ngrx/store';
import { ElementsState } from '../reducers';

// ________selectors_________

// globalState
export const getElementsState = createFeatureSelector<ElementsState>('elements');
