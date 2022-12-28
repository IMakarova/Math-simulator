import { applyMiddleware, createStore, compose, combineReducers } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from "./auth/reducers";
import * as reducers from './reducers';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    ...reducers
})

const middleware = [
    thunk,
    createLogger()
]

let composeEnhancers = compose;
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if(typeof composeWithDevTools === 'function') {
    composeEnhancers = composeWithDevTools;
}

const store = createStore(
    rootReducer, 
    {
        auth: 
        {
            isLogin: false,
            username: '',
            isLoginModal: false,
            src: '', 
        },
        main:
        {
            isOperation: false,
            isRight: false,
            isWrong: false,
            comment: null,
            button: 'check',
            result: '',
            readOnly: false,
            isQuiz: false,
            quizIsStart: false,
            isTable: false,
            timerIsStart: false,
            timeIsOver: false,
            operation: null,
            score: 0,
            bestScore: false,
        }
    }, 
    composeEnhancers(applyMiddleware(...middleware))
);

window.store = store;

export default store;