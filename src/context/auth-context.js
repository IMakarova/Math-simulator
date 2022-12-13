import React, { createContext, useReducer } from 'react';

const AuthContext = React.createContext({
    logoutAction: () => {},
    loginSuccessAction: () => {},
    setAvatarAction: () => {},
    showLoginAction: () => {},
});

const defaultState = {
    isLoginState: false,
    usernameState: '',
    isLoginModalState: false,
    srcState: '', 
  }

const loginReducer = (state, action) => {
const { type } = action || {};

switch (type) {
    case 'SHOW_LOGIN': {
    return {
        ...state,
        isLoginModalState: true
    };
    }
    case 'SET_AVATAR': {
        return {
            ...state,
        srcState: action?.payload?.src,
        };
        }
    case 'LOGIN_SUCCESS': {
    return {
        isLoginState: true,
        usernameState: action?.payload?.username,
        isLoginModalState: false
    };
    }
    case 'LOGOUT': {
    return defaultState;
    }
    default:
    return state;
}
}

export const AuthContextProvider = (props) => {
    const [loginState, dispatchLoginAction] = useReducer(loginReducer, defaultState)

    const loginSuccessAction = (username) => dispatchLoginAction({ type: 'LOGIN_SUCCESS', payload: { username } });

    const setAvatarAction = (src) => dispatchLoginAction({ type: 'SET_AVATAR', payload: { src } });
  
    const showLoginAction = () => dispatchLoginAction({ type: 'SHOW_LOGIN'});
  
    const logoutAction = () => dispatchLoginAction({ type: 'LOGOUT' });
  
    return (
        <AuthContext.Provider value={{
            logoutAction,
            setAvatarAction,
            loginSuccessAction,
            showLoginAction,
            isLogin: loginState.isLoginState,
            username: loginState.usernameState,
            isLoginModal: loginState.isLoginModalState,
            src: loginState.srcState,
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
