import { ACTION_TYPES as QUIZ_ACTION_TYPES } from './constants';

export const quizAction = (operationsMix) => (dispatch, getState) => {
  dispatch({ 
    type: QUIZ_ACTION_TYPES.QUIZ, 
    payload: { operationsMix }
  })
};

export const startQuizAction = () => (dispatch, getState) => {
  dispatch({ type: QUIZ_ACTION_TYPES.START_QUIZ })
};

export const nextQuizAction = (score, operationsMix) => (dispatch, getState) => {
  dispatch({ 
    type: QUIZ_ACTION_TYPES.NEXT_QUIZ, 
    payload: { score, operationsMix }
  })
};

export const wrongQuizAction = () => (dispatch, getState) => {
  dispatch({ type: QUIZ_ACTION_TYPES.WRONG_QUIZ })
};

export const endTimerAction = () => (dispatch, getState) => {
  dispatch({ type: QUIZ_ACTION_TYPES.END_TIMER })
};

export const bestResultAction = () => (dispatch, getState) => {
  dispatch({ type: QUIZ_ACTION_TYPES.BEST_RESULT })
};

export const negativeResultAction = () => (dispatch, getState) => {
  dispatch({ type: QUIZ_ACTION_TYPES.NEGATIVE_RESULT })
};

export const getResultAction = (result) => (dispatch, getState) => {
  dispatch({ 
    type: QUIZ_ACTION_TYPES.GET_RESULT, 
    payload: { result }
  })
};

export const quitQuizAction = () => (dispatch, getState) => {
  dispatch({ type: QUIZ_ACTION_TYPES.QUIT_QUIZ })
};


