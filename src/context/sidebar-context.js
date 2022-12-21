import React, { createContext, useReducer } from 'react';

const SidebarContext = React.createContext({
  operationAction: () => {},
  nextOperationAction: () => {},
  rightAnswerAction: () => {},
  nullAnswerAction: () => {},
  wrongAnswerAction: () => {},
  showAnswerAction: () => {},
  quizAction: () => {},
  startQuizAction: () => {},
  resultsAction: () => {},
  getResultAction: () => {},
  startPageAction: () => {},
});

const defaultState = {
  headerState: 'How to start?',
  isTextState: true,
  isOperationState: false,
  isRightState: false,
  isWrongState: false,
  commentState: null,
  buttonState: 'check',
  resultState: '',
  readOnlyState: false,
  isQuizState: false,
  quizIsStartState: false,
  isTableState: false,
  timerIsStartState: false,
  timeIsOverState: false,
  arrState: [],
  operationState: null,
  scoreState: 0,
  bestScoreState: false,
};

const sidebarReducer = (state, action) => {
  const { type } = action || {};

  switch (type) {
    case 'OPERATION': {
      return {
        ...state,
        headerState: action?.payload?.header,
        isOperationState: true,
        isTextState: false,
        arrState: action?.payload?.arr,
        operationState: action?.payload?.operation,
        isQuizState: false,
        quizIsStartState: false,
        isTableState: false,
        isRightState: false,
        isWrongState: false,
        commentState: null,
        readOnlyState: false,
        resultState: '',
        buttonState: 'check',
      };
    }
    case 'NEXT_OPERATION': {
      return {
        ...state,
        arrState: action?.payload?.arr,
        isRightState: false,
        resultState: '',
        commentState: null,
        buttonState: 'check',
      };
    }
    case 'RIGHT_ANSWER': {
      return {
        ...state,
        isRightState: true,
        isWrongState: false,
        buttonState: 'next',
        commentState: 'That is right!',
      };
    }
    case 'NULL_ANSWER': {
      return {
        ...state,
        isWrongState: true,
        commentState: 'Please, write your answer!',
        readOnlyState: false,
      };
    }
    case 'WRONG_ANSWER': {
      return {
        ...state,
        isWrongState: true,
        commentState: 'That is wrong!',
        readOnlyState: false,
      };
    }
    case 'SHOW_ANSWER': {
      return {
        ...state,
        readOnlyState: true,
        commentState: action?.payload?.comment,
      };
    }
    // case 'HIDE_ANSWER': {
    //     return {
    //         ...state,
    //         isWrongState: true,
    //         commentState: 'That is wrong!'
    //     };
    //     }
    case 'QUIZ': {
      return {
        ...state,
        headerState: action?.payload?.header,
        isQuizState: true,
        isTextState: false,
        isOperationState: true,
        isTableState: false,
        arrState: action?.payload?.arr,
      };
    }
    case 'START_QUIZ': {
      return {
        ...state,

        // isWrongState: false,

        resultState: '',
        quizIsStartState: true,
        timerIsStartState: false,
        timeIsOverState: false,
        scoreState: 0,
        bestScoreState: false,
      };
    }
    case 'RIGHT_QUIZ': {
      return {
        ...state,
        isWrongState: false,
        resultState: '',
        scoreState: action?.payload?.score,
        arrState: action?.payload?.arr,
      };
    }
    case 'WRONG_QUIZ': {
      return {
        ...state,
        isWrongState: true,
      };
    }
    case 'START_TIMER': {
      return {
        ...state,
        timerIsStartState: true,
      };
    }
    case 'END_TIMER': {
      return {
        ...state,
        isWrongState: false,
        timeIsOverState: true,
        quizIsStartState: false,
      };
    }
      case 'BEST_RESULT': {
        return {
          ...state,
          bestScoreState: true,
        };
      }
      case 'NEGATIVE_RESULT': {
        return {
          ...state,
          scoreState: 0,
        };
      }
    case 'RESULTS': {
      return {
        ...state,
        headerState: action?.payload?.header,
        isTableState: true,
        isTextState: false,
        isOperationState: false,
        isQuizState: false,
        quizIsStartState: false,
        isWrongState: false,
      };
    }
    case 'GET_RESULT': {
      return {
        ...state,
        resultState: action?.payload?.result,
      };
    }
    case 'START_PAGE': {
      return defaultState;
    }
    default:
      return state;
  }
};

export const SidebarContextProvider = (props) => {
  const [sidebarState, dispatchSidebarAction] = useReducer(
    sidebarReducer,
    defaultState
  );

  const operationAction = (arr, operation, header) => {
    dispatchSidebarAction({
      type: 'OPERATION',
      payload: { arr, operation, header },
    });
  }
  const nextOperationAction = (arr) =>
    dispatchSidebarAction({ type: 'NEXT_OPERATION', payload: { arr } });

  const rightAnswerAction = () =>
    dispatchSidebarAction({ type: 'RIGHT_ANSWER' });
  const nullAnswerAction = () => dispatchSidebarAction({ type: 'NULL_ANSWER' });
  const wrongAnswerAction = () =>
    dispatchSidebarAction({ type: 'WRONG_ANSWER' });
  const showAnswerAction = (comment) =>
    dispatchSidebarAction({ type: 'SHOW_ANSWER', payload: { comment } });

  const quizAction = (arr, header) =>
    dispatchSidebarAction({ type: 'QUIZ', payload: { arr, header } });
  const startQuizAction = () => dispatchSidebarAction({ type: 'START_QUIZ' });
  const rightQuizAction = (score, arr) =>
    dispatchSidebarAction({ type: 'RIGHT_QUIZ', payload: { score, arr } });
  const wrongQuizAction = () => dispatchSidebarAction({ type: 'WRONG_QUIZ' });

  const startTimerAction = () => dispatchSidebarAction({ type: 'START_TIMER' });
  const endTimerAction = () => dispatchSidebarAction({ type: 'END_TIMER' });

  const bestResultAction = () => dispatchSidebarAction({ type: 'BEST_RESULT' });
  const negativeResultAction = () => dispatchSidebarAction({ type: 'NEGATIVE_RESULT' });

  const resultsAction = (header) => {
    dispatchSidebarAction({ type: 'RESULTS', payload: { header } });
  }

  const getResultAction = (result) =>
    dispatchSidebarAction({ type: 'GET_RESULT', payload: { result } });

  const startPageAction = () => dispatchSidebarAction({ type: 'START_PAGE' });

  return (
    <SidebarContext.Provider
      value={{
        operationAction,
        nextOperationAction,
        rightAnswerAction,
        nullAnswerAction,
        wrongAnswerAction,
        showAnswerAction,
        quizAction,
        startQuizAction,
        rightQuizAction,
        wrongQuizAction,
        startTimerAction,
        endTimerAction,
        bestResultAction,
        negativeResultAction,
        resultsAction,
        getResultAction,
        startPageAction,
        header: sidebarState.headerState,
        isText: sidebarState.isTextState,
        isOperation: sidebarState.isOperationState,
        isRight: sidebarState.isRightState,
        isWrong: sidebarState.isWrongState,
        comment: sidebarState.commentState,
        button: sidebarState.buttonState,
        result: sidebarState.resultState,
        readOnly: sidebarState.readOnlyState,
        isQuiz: sidebarState.isQuizState,
        quizIsStart: sidebarState.quizIsStartState,
        isTable: sidebarState.isTableState,
        timerIsStart: sidebarState.timerIsStartState,
        timeIsOver: sidebarState.timeIsOverState,
        arr: sidebarState.arrState,
        operation: sidebarState.operationState,
        score: sidebarState.scoreState,
        bestScore: sidebarState.bestScoreState,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
