import { applyMiddleware, createStore, compose } from "redux";
import postsReducer from "./posts/reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

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
    postsReducer,
    { posts: {} },
    composeEnhancers(applyMiddleware(...middleware))
);

window.store = store;

export default store;
