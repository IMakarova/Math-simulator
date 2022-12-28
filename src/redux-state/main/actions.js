import { ACTION_TYPES as MAIN_ACTION_TYPES } from './constants';

export const operationAction = (numbers, operationMark) => (dispatch, getState) => {
    dispatch({ 
      type: MAIN_ACTION_TYPES.OPERATION,
      payload: { numbers, operationMark }
     })
};

export const nextOperationAction = (numbers) => (dispatch, getState) => {
    dispatch({ 
      type: MAIN_ACTION_TYPES.NEXT_OPERATION, 
      payload: { numbers }
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

export const quizAction = (numbers, operationMark) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.QUIZ, 
    payload: { numbers, operationMark }
  })
};

export const startQuizAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.START_QUIZ })
};

export const nextQuizAction = (score, numbers, operationMark) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.NEXT_QUIZ, 
    payload: { score, numbers, operationMark }
  })
};

export const wrongQuizAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.WRONG_QUIZ })
};

// export const startTimerAction = () => (dispatch, getState) => {
//   dispatch({ type: MAIN_ACTION_TYPES.START_TIMER })
// };

export const endTimerAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.END_TIMER })
};

export const bestResultAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.BEST_RESULT })
};

export const negativeResultAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.NEGATIVE_RESULT })
};

export const resultsAction = () => (dispatch, getState) => {
  dispatch({ type: MAIN_ACTION_TYPES.RESULTS })
};

export const getResultAction = (result) => (dispatch, getState) => {
  dispatch({ 
    type: MAIN_ACTION_TYPES.GET_RESULT, 
    payload: { result }
  })
};

// export const startPageAction = () => (dispatch, getState) => {
//   dispatch({ type: MAIN_ACTION_TYPES.START_PAGE })
// };


