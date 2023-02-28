import { ACTION_TYPES as ANSWER_ACTION_TYPES } from "./constants";
// import store from '../store';

export const defaultState = {
    isRight: false,
    isWrong: false,
    comment: null,
    readOnly: false,
    button: 'check',
}
// const button = store.getState().main.button;
const answerReducer = (state = defaultState, action) => {
    const { type, payload = {} } = action;
    
    switch(type) {
    case ANSWER_ACTION_TYPES.RIGHT_ANSWER: {
    return {
        ...state,
        isRight: true,
        isWrong: false,
        comment: 'That is right!',
        button: 'next',
    }
}
case ANSWER_ACTION_TYPES.NULL_ANSWER: {
    return {
        ...state,
        isWrong: true,
        comment: 'Please, write your answer!',
        readOnly: false,
    }
}
case ANSWER_ACTION_TYPES.WRONG_ANSWER: {
    return {
        ...state,
        isWrong: true,
        comment: 'That is wrong!',
        readOnly: false,
    }
}
case ANSWER_ACTION_TYPES.SHOW_ANSWER: {
    return {
        ...state,
        readOnly: true,
        comment: payload.comment,
    }
}
case ANSWER_ACTION_TYPES.CLEAN_OUT_ANSWER: {
    return {
        ...state,
        isRight: false,
        isWrong: false,
        comment: null,
        readOnly: false,
        button: 'check',
    }
}
default: return state;  
}
}

export default answerReducer;