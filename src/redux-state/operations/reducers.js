// import { createSlice } from "@reduxjs/toolkit";
import { ACTION_TYPES as OPERATIONS_ACTION_TYPES } from "./constants";


export const defaultState = {
    // isText: true,
    // isOperation: false,
    // isRight: false,
    // isWrong: false,
    // comment: null,
    // button: 'check',
    result: '',
    // readOnly: false,
    // isQuiz: false,
    // quizIsStart: false,
    // isTable: false,
    // timerIsStart: false,
    // timeIsOver: false,
    operationNumbers: [],
    operationMark: '',
    // operation: null,
    // score: 0,
    // bestScore: false,
}

const operationsReducer = (state = defaultState, action) => {
    const { type, payload = {} } = action;

    switch(type) {
        case OPERATIONS_ACTION_TYPES.OPERATION: {
            return {
                ...state,
                    // isOperation: true,
                    // isText: false,
                    operationNumbers: payload.operationNumbers,
                    operationMark: payload.operationMark,
                    // operation: payload.operation,
                    // isQuiz: false,
                    // quizIsStart: false,
                    // isTable: false,
                    // isRight: false,
                    // isWrong: false,
                    // comment: null,
                    // readOnly: false,
                    result: '',
                    // button: 'check',
            }
        }
        case OPERATIONS_ACTION_TYPES.NEXT_OPERATION: {
            return {
                ...state,
                operationNumbers: payload.operationNumbers,
                // isRight: false,
                // comment: null,
                result: '',
                // button: 'check',
            }
        }
        // case MAIN_ACTION_TYPES.RIGHT_ANSWER: {
        //     return {
        //         ...state,
        //         isRight: true,
        //         isWrong: false,
        //         comment: 'That is right!',
        //         button: 'next',
        //     }
        // }
        // case MAIN_ACTION_TYPES.NULL_ANSWER: {
        //     return {
        //         ...state,
        //         isWrong: true,
        //         comment: 'Please, write your answer!',
        //         readOnly: false,
        //     }
        // }
        // case MAIN_ACTION_TYPES.WRONG_ANSWER: {
        //     return {
        //         ...state,
        //         isWrong: true,
        //         comment: 'That is wrong!',
        //         readOnly: false,
        //     }
        // }
        // case MAIN_ACTION_TYPES.SHOW_ANSWER: {
        //     return {
        //         ...state,
        //         readOnly: true,
        //         comment: payload.comment,
        //     }
        // }
        // case MAIN_ACTION_TYPES.QUIZ: {
        //     return {
        //         ...state,
        //         // isOperation: true,
        //         // isText: false,
        //         operationNumbers: payload.operationNumbers,
        //         // operationMark: payload.operationMark,
        //         // isQuiz: true,
        //         // quizIsStart: false,
        //         // timerIsStart: false,
        //         // timeIsOver: false,
        //         // isTable: false,
        //     }
        // }
        // case MAIN_ACTION_TYPES.START_QUIZ: {
        //     return {
        //         ...state,
        //         result: '',
        //         quizIsStart: true,
        //         // timerIsStart: false,
        //         timeIsOver: false,
        //         score: 0,
        //         bestScore: false,
        //     }
        // }
        // case MAIN_ACTION_TYPES.NEXT_QUIZ: {
        //     return {
        //         ...state,
        //         isWrong: false,
        //         result: '',
        //         score: payload.score,
        //         operationNumbers: payload.operationNumbers,
        //         operationMark: payload.operationMark,
        //     }
        // }
        // case MAIN_ACTION_TYPES.WRONG_QUIZ: {
        //     return {
        //         ...state,
        //         isWrong: true,
        //     }
        // }
        // // case MAIN_ACTION_TYPES.START_TIMER: {
        // //     return {
        // //         ...state,
        // //         timerIsStart: true,
        // //     }
        // // }
        // case MAIN_ACTION_TYPES.END_TIMER: {
        //     return {
        //         ...state,
        //         isWrong: false,
        //         quizIsStart: false,
        //         timeIsOver: true,
        //     }
        // }
        // case MAIN_ACTION_TYPES.BEST_RESULT: {
        //     return {
        //         ...state,
        //         bestScore: true,
        //         quizIsStart: false,
        //     }
        // }
        // case MAIN_ACTION_TYPES.NEGATIVE_RESULT: {
        //     return {
        //         ...state,
        //         score: 0,
        //     }
        // }
        // case MAIN_ACTION_TYPES.RESULTS: {
        //     return {
        //         ...state,
        //         // isText: false,
        //         // isOperation: false,
        //         isWrong: false,
                // isQuiz: false,
        //         quizIsStart: false,
        //         timeIsOver: false,
        //         isTable: true,
        //     }
        // }
        case OPERATIONS_ACTION_TYPES.GET_RESULT: {
            return {
                ...state,
                result: payload.result,
            }
        }
        // case MAIN_ACTION_TYPES.START_PAGE: {
        //     return defaultState
        // }
        default: return state;  
    }

}
export default operationsReducer;