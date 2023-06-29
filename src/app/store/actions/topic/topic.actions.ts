import { createAction, props } from '@ngrx/store';

export const loadTopics = createAction(
  '[Topic] Load Topics'
);

export const loadTopicsSuccess = createAction(
  '[Topic] Load Topics Success',
  props<{ data: any }>()
);

export const loadTopicsFailure = createAction(
  '[Topic] Load Topics Failure',
  props<{ error: any }>()
);
