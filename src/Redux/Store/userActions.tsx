// ./src/store/chat/actions.ts

import { ActionCreator } from 'redux';
import {
  UsersCreateAction,
  UsersLoginAction,
} from './userTypes';


export const loginAction: ActionCreator<UsersLoginAction> = ( userState) => ({
  type: '@@user/LOGIN_USER',
  payload: {
    userState,
  },
});

export const createUserAction: ActionCreator<UsersCreateAction> = (
    userState,
) => ({
  type: '@@user/CREATE_USER',
  payload: {
    userState
  },
});
