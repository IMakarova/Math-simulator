import React, { PureComponent, useContext, useState } from 'react';
import './style.css';
import AuthContext from '../../../../context/auth-context';

const LoginModal = () => {
  const context = useContext(AuthContext);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [usernameClass, setUsernameClass] = useState('');
  const [usernamePlaceholder, setUsernamePlaceholder] = useState('');

  const generateSrc = () => {
    const url = 'https://robohash.org/' + enteredUsername + '.png?set=set4';
    const urlString = JSON.stringify(url);
    context.setAvatarAction(urlString);
  };

  const userNameChangeHandler = (event) => {
    console.log()
    setUsernameClass('');
    // setEnteredUsername(event.target.value);
    const username = (event.target.validity.valid) ? event.target.value : enteredUsername;
    setEnteredUsername(username);
    console.log(username);
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const loginClick = (event) => {
    event.preventDefault();
    if (!enteredUsername) {
      setUsernameClass('empty-username');
      setUsernamePlaceholder('enter your username');
    } else {
      setUsernameClass('');
      setEnteredPassword('');
      setEnteredUsername('');
      context.loginSuccessAction(enteredUsername);
      generateSrc();
    }
  };

  const closeClick = (event) => {
    context.logoutAction();
  };

  return (
    <div className="login-modal">
      <div id="modal-window">
        <button id="close" onClick={closeClick}>
          &#x2715;
        </button>
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

export default LoginModal;
