import React, { PureComponent } from 'react';
import './style.css';

class LoginLogout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }

  loginHandler = (event) => {
    if (this.props.switchIsLoginModal) {
      this.props.switchIsLoginModal(true);
    } else {
      this.props.state.props.switchIsLoginModal(true);
    }
  };

  logoutHandler = (event) => {
    this.props.switchIsLogin(false);
    this.props.changeUsername('');
  };

  render() {
    return (
      <button id="login" onClick={this.props.state.isLogin ? this.logoutHandler : this.loginHandler}>
        {this.props.state.isLogin ? 'Logout' : 'Login'}
      </button>
    );
  }
}

export default LoginLogout;
