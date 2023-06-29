import { Action, createReducer, on } from '@ngrx/store';
import { Topic } from 'src/app/models/topic';
import { loadTopicsSuccess } from '../../actions/topic/topic.actions';


export const topicFeatureKey = 'topic';

export interface State {
  topics: Topic[];

}

export const initialState: State = {
  topics: [],
};


export const reducer = createReducer(
  initialState,
  on(loadTopicsSuccess, (state, action) => {
    return {...state, topics: action.data};
  })

);

