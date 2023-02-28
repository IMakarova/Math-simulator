import './style.css';
import { connect } from 'react-redux';
import { showLoginModalAction, logoutAction, loginSuccessAction } from '../../../../redux-state/auth/actions';
import { useEffect } from 'react';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state?.auth?.isLogin,
});

const mapDispatchToProps = 
// (dispatch) => 
({
  // showLoginModalAction: () => dispatch(showLoginModalAction()),
  // logoutAction: () => dispatch(logoutAction())
  showLoginModalAction,
  logoutAction,
  loginSuccessAction
});

const LoginLogout = ({ isLogin, showLoginModalAction, logoutAction, loginSuccessAction }) => {

  useEffect(() => {
    if(localStorage.getItem('loginInfo')){
    const loginInfo = Object.entries(JSON.parse(localStorage.getItem('loginInfo'))).flat();
    console.log(Object.entries(JSON.parse(localStorage.getItem('loginInfo'))).flat());
    loginSuccessAction(loginInfo[0], loginInfo[1]);
    }
  }, [])

  const loginHandler = (event) => {
    showLoginModalAction();
  };

  const logoutHandler = (event) => {
    logoutAction();
    localStorage.removeItem('loginInfo');
          // console.log(localStorage);
  };

    return (
      <button id="login" onClick={isLogin ? logoutHandler : loginHandler}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginLogout);

