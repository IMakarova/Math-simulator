import React, { useContext } from 'react';
import './style.css';
import AuthContext from '../../../../context/auth-context';

const LoginLogout = () => {
  const context = useContext(AuthContext);

  const loginHandler = (event) => {
    context.showLoginAction();
  };

  const logoutHandler = (event) => {
    context.logoutAction();
  };

    return (
      <button id="login" onClick={context.isLogin ? logoutHandler : loginHandler}>
        {context.isLogin ? 'Logout' : 'Login'}
      </button>
    );
}

export default LoginLogout;
