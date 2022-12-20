import { ACTION_TYPES as LOGIN_ACTION_TYPES } from './constants';

export const showLoginModalAction = () => (dispatch, getState) => {
    dispatch({ type: LOGIN_ACTION_TYPES.SHOW_LOGIN_MODAL })
};

export const loginSuccessAction = (username, src) => (dispatch, getState) => {
    dispatch({ 
      type: LOGIN_ACTION_TYPES.LOGIN_SUCCESS, 
      payload: { username, src }
    })

  };

  export const logoutAction = () => (dispatch, getState) => {
    dispatch({ type: LOGIN_ACTION_TYPES.LOGOUT })
};
  
