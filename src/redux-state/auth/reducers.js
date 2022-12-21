import { ACTION_TYPES as LOGIN_ACTION_TYPES } from "./constants";

export const defaultState = {
    isLogin: false,
    username: '',
    isLoginModal: false,
    src: '', 
}

const authReducer = (state = defaultState, action) => {
    const { type, payload = {} } = action;

    switch(type) {
        case LOGIN_ACTION_TYPES.SHOW_LOGIN_MODAL: {
            return {
                ...state,
                isLoginModal: true,
            }
        }
        case LOGIN_ACTION_TYPES.LOGIN_SUCCESS: {
            console.log(payload);
            return {
                // ...state,
                isLogin: true,
                username: payload.username,
                isLoginModal: false,
                src: payload.src
            }
        }
        case LOGIN_ACTION_TYPES.LOGOUT: {
            return defaultState
        }
        default: return state;
        
    }

}
export default authReducer;