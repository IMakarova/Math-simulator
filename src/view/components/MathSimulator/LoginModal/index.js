import React, { useState } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { loginSuccessAction, logoutAction } from '../../../../redux-state/auth/actions';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state?.auth?.isLogin,
  username: state?.auth?.username,
  isLoginModal: state?.auth?.isLoginModal,
  src: state?.auth?.src
});

const mapDispatchToProps = ({
  loginSuccessAction,
  logoutAction
});

const LoginModal = ({ loginSuccessAction, logoutAction, isLogin, username, src }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [usernameClass, setUsernameClass] = useState('');
  const [usernamePlaceholder, setUsernamePlaceholder] = useState('');

  const generateSrc = () => {
    const url = 'https://robohash.org/' + enteredUsername + '.png?set=set4';
    const urlString = JSON.stringify(url);
    const urlWithoutQuotes = urlString.replaceAll('"', '');
    return urlWithoutQuotes;
  }

  const userNameChangeHandler = (event) => {
    setUsernameClass('');
    const currentUsername = (event.target.validity.valid) ? event.target.value : enteredUsername;
    setEnteredUsername(currentUsername);
  }

  const loginClick = (event) => {
    event.preventDefault();
    if (!enteredUsername) {
      setUsernameClass('empty-username');
      setUsernamePlaceholder('enter your username');
    } else {
      setUsernameClass('');
      // setEnteredPassword('');
      setEnteredUsername('');
      loginSuccessAction(enteredUsername, generateSrc());
      const loginInfo = { [enteredUsername]: generateSrc() };
      localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
      // console.log(localStorage);
    }
  };

  const closeClick = (event) => {
    logoutAction();
  };

  return (
    <div className="login-modal">
      <div id="modal-window">
        <button id="close" onClick={closeClick}>&#x2715;</button>
        <form onSubmit={loginClick}>
          <div id="modal-form">
            <label>Username</label>
            <input
              pattern="[\w\-]*"
              className={usernameClass}
              type="text"
              placeholder={usernamePlaceholder}
              value={enteredUsername}
              onChange={userNameChangeHandler}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
