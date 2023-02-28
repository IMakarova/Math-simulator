import { ACTION_TYPES as ANSWER_ACTION_TYPES } from './constants';

export const rightAnswerAction = () => (dispatch, getState) => {
    dispatch({ type: ANSWER_ACTION_TYPES.RIGHT_ANSWER })
  };
  
  export const nullAnswerAction = () => (dispatch, getState) => {
    dispatch({ type: ANSWER_ACTION_TYPES.NULL_ANSWER })
  };
  
  export const wrongAnswerAction = () => (dispatch, getState) => {
    dispatch({ type: ANSWER_ACTION_TYPES.WRONG_ANSWER })
  };
  
  export const showAnswerAction = (comment) => (dispatch, getState) => {
    dispatch({ 
      type: ANSWER_ACTION_TYPES.SHOW_ANSWER, 
      payload: { comment }
    })
  };

    export const cleanOutAction = (comment) => (dispatch, getState) => {
      dispatch({ type: ANSWER_ACTION_TYPES.CLEAN_OUT_ANSWER })
  };
