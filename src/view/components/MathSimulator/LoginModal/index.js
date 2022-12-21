import React, { useEffect, useState } from 'react';
import './style.css';
// import AuthContext from '../../../../context/auth-context';
import { connect } from 'react-redux';
import { loginSuccessAction, logoutAction } from '../../../../redux-state/auth/actions';
import store from '../../../../redux-state/store';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.isLogin,
  username: state.username,
  isLoginModal: state.isLoginModal,
  src: state.src
});

const mapDispatchToProps = ({
  loginSuccessAction,
  logoutAction
});


const LoginModal = ({ loginSuccessAction, logoutAction, isLogin, username, src }) => {
  // const context = useContext(AuthContext);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [usernameClass, setUsernameClass] = useState('');
  const [usernamePlaceholder, setUsernamePlaceholder] = useState('');

  const generateSrc = () => {
    const url = 'https://robohash.org/' + enteredUsername + '.png?set=set4';
    const urlString = JSON.stringify(url);
    const urlWithoutQuotes = urlString.replaceAll('"', '');
    console.log(urlString, urlWithoutQuotes)
    return urlWithoutQuotes;
    // context.setAvatarAction(urlString);
  };

  const userNameChangeHandler = (event) => {
    // console.log()
    setUsernameClass('');
    // setEnteredUsername(event.target.value);
    const currentUsername = (event.target.validity.valid) ? event.target.value : enteredUsername;
    setEnteredUsername(currentUsername);
    // console.log(username);
  }

  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };

  const loginClick = (event) => {
    event.preventDefault();
    if (!enteredUsername) {
      setUsernameClass('empty-username');
      setUsernamePlaceholder('enter your username');
    } else {
      setUsernameClass('');
      setEnteredPassword('');
      setEnteredUsername('');
      console.log(enteredUsername, generateSrc());
      loginSuccessAction(enteredUsername, generateSrc());
    }
  };

  const closeClick = (event) => {
    logoutAction();
  };

// useEffect(() => {
//   console.log(isLogin)
// }, [])

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
