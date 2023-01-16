// import { createSlice } from "@reduxjs/toolkit";
import { ACTION_TYPES as LOGIN_ACTION_TYPES } from "./constants";


export const defaultState = {
    isLogin: false,
    username: '',
    isLoginModal: false,
    src: '', 
}

// const authSlise = createSlice({
//     name: 'auth',
//     initialState: defaultState,
//     reducers: {
//         showLoginModal(state, action) {
//             state.isLoginModal = true;
//         },
//         loginSuccess(state, action) {
//             state.isLogin = true;
//             state.username = action.payload.username;
//             state.isLoginModal = false;
//             state.src = action.payload.src;
//         },
//         logout(state, action) {
//             return defaultState;
//         }
//     }
// })

// export const { showLoginModal, loginSuccess, logout } = authSlise.actions;

// export default authSlise.reducer;

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
            // console.log(payload);
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