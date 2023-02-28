// import { createSlice } from "@reduxjs/toolkit";
import { ACTION_TYPES as QUIZ_ACTION_TYPES } from "./constants";


export const defaultState = {
    result: '',
    quizIsStart: false,
    timeIsOver: false,
    operationsMix: [],
    score: 0,
    bestScore: false,
    isWrong: false,
}

const quizReducer = (state = defaultState, action) => {
    const { type, payload = {} } = action;

    switch(type) {
        case QUIZ_ACTION_TYPES.QUIZ: {
            return {
                ...state,
                operationsMix: payload.operationsMix,
            }
        }
        case QUIZ_ACTION_TYPES.START_QUIZ: {
            return {
                ...state,
                result: '',
                quizIsStart: true,
                timeIsOver: false,
                score: 0,
                bestScore: false,
            }
        }
        case QUIZ_ACTION_TYPES.NEXT_QUIZ: {
            return {
                ...state,
                isWrong: false,
                result: '',
                score: payload.score,
                operationsMix: payload.operationsMix,
                // operationMark: payload.operationMark,
            }
        }
        case QUIZ_ACTION_TYPES.WRONG_QUIZ: {
            return {
                ...state,
                isWrong: true,
            }
        }
        case QUIZ_ACTION_TYPES.END_TIMER: {
            return {
                ...state,
                isWrong: false,
                quizIsStart: false,
                timeIsOver: true,
            }
        }
        case QUIZ_ACTION_TYPES.BEST_RESULT: {
            return {
                ...state,
                bestScore: true,
                quizIsStart: false,
            }
        }
        case QUIZ_ACTION_TYPES.NEGATIVE_RESULT: {
            return {
                ...state,
                score: 0,
            }
        }
        case QUIZ_ACTION_TYPES.GET_RESULT: {
            return {
                ...state,
                result: payload.result,
            }
        }
        case QUIZ_ACTION_TYPES.QUIT_QUIZ: {
            return {
                ...state,
                timeIsOver: false,
                bestScore: false,
                quizIsStart: false,
            }
        }
        default: return state;  
    }

}
export default quizReducer;