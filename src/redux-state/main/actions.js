import { ACTION_TYPES as MAIN_ACTION_TYPES } from './constants';

export const operationAction = (arr, operation, header) => (dispatch, getState) => {
    dispatch({ 
      type: MAIN_ACTION_TYPES.OPERATION,
      payload: { arr, operation, header }
     })
};

export const nextOperationAction = (arr) => (dispatch, getState) => {
    dispatch({ 
      type: MAIN_ACTION_TYPES.NEXT_OPERATION, 
      payload: { arr }
    })
  };

export const rightAnswerAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.RIGHT_ANSWER })
};

export const nullAnswerAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.NULL_ANSWER })
};

export const wrongAnswerAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.WRONG_ANSWER })
};

export const showAnswerAction = (comment) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.SHOW_ANSWER, 
    payload: { comment }
  })
};

export const quizAction = (arr, header ) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.QUIZ, 
    payload: { arr, header }
  })
};

export const startQuizAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.START_QUIZ })
};

export const nextQuizAction = (score, arr) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.NEXT_QUIZ, 
    payload: { score, arr }
  })
};

export const wrongQuizAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.WRONG_QUIZ })
};

export const startTimerAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.START_TIMER })
};

export const endTimerAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.END_TIMER })
};

export const bestResultAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.BEST_RESULT })
};

export const negativeResultAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.NEGATIVE_RESULT })
};

export const resultsAction = (header) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.RESULTS, 
    payload: { header }
  })
};

export const getResultAction = (header, arr) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.GET_RESULT, 
    payload: { header, arr }
  })
};

export const startPageAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.START_PAGE })
};


