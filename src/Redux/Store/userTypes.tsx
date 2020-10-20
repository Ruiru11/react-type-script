import { Action } from 'redux';


export interface userState {
    username: string;
    password: string;
  }


  export interface UsersLoginAction extends Action {
    type: '@@user/LOGIN_USER';
    payload: {
       userState:any;
    };
  }
  
  export interface UsersCreateAction extends Action {
    type: '@@user/CREATE_USER';
    payload: {
        userState:any
    };
  }
  
  // Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
  export type userActions = UsersLoginAction | UsersCreateAction;
