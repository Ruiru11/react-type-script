// ./src/store/index.ts

import { combineReducers, Dispatch, Reducer } from 'redux';

// Import your state types and reducers here.
import { userState } from './Store/userTypes';
import userReducer from './Store/userReducer';


// The top-level state object
export interface ApplicationState {
  user: userState;

}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  user: userReducer,
});
