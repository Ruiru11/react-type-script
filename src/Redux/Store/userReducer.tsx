import { Reducer } from 'redux';
import { userState, userActions } from './userTypes';

// Type-safe initialState!
export const initialState: userState = {
  username: '',
  password:""
};

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.

const reducer: Reducer<userState> = (state: userState = initialState, action) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  switch ((action as userActions).type) {
    case '@@user/LOGIN_USER':
      return { ...state, username: action.payload.username };
    case '@@user/CREATE_USER':
      return { ...state, connectedUsers: action.payload.users };
    default:
      return state;
  }
};

export default reducer;
