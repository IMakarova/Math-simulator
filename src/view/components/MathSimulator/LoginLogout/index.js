import React, { Component } from 'react';

class LoginLogout extends Component {
    constructor(props) {
        super(props);
    }
    loginHandler = (event) => { 
        this.props.switchIsLoginModal(true);
      } 
     
    logoutHandler = (event) => { 
        this.props.switchIsLogin(false);
        console.log(this.props.state.username);
        this.props.changeUsername(''); 
      } 
     
    render()  {
        return ( 
<button onClick={this.props.state.isLogin ? this.logoutHandler : this.loginHandler}>{this.props.state.isLogin ? 'Logout' : 'Login'}</button>
      ) 
    }

}
export default LoginLogout;
