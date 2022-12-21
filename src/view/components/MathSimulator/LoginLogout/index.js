import React, { useEffect } from 'react';
import './style.css';
// import AuthContext from '../../../../context/auth-context';
import { connect } from 'react-redux';
import { showLoginModalAction, logoutAction } from '../../../../redux-state/auth/actions';
// import { bindActionCreators } from 'redux';
// import store from '../../../../redux-state/store';
// import { defaultState } from '../../../../redux-state/auth/reducers'

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.isLogin,
  // username: state.auth.username,
  // isLoginModal: state.auth.isLoginModal,
  // src: state.auth.src
});

// const mapDispatchToProps1 = (dispatch) => ({
//   showLoginModalAction: () => dispatch(showLoginModalAction()),
//   logoutAction: () => dispatch(logoutAction())
// })

// const mapDispatchToProps2 = (dispatch) => 
// bindActionCreators({
//   showLoginModalAction: showLoginModalAction,
//   logoutAction: logoutAction
// }, dispatch)

const mapDispatchToProps = (dispatch) => ({
  showLoginModalAction: () => dispatch(showLoginModalAction()),
  logoutAction: () => dispatch(logoutAction())
});

const LoginLogout = ({ isLogin, showLoginModalAction, logoutAction }) => {
  // const context = useContext(AuthContext);

useEffect(() => {
  // console.log(store)
}, [])

  const loginHandler = (event) => {
    // context.showLoginAction();
    showLoginModalAction();
  };

  const logoutHandler = (event) => {
    // context.logoutAction();
    logoutAction();
  };

    return (
      <button id="login" onClick={isLogin ? logoutHandler : loginHandler}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginLogout);
// export default LoginLogout;
