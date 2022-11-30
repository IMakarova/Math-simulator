import React, { Component } from 'react';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredUsername: '',
            enteredPassword: '',
            usernameClass: '',
            usernamePlaceholder: ''
        }
    }
    userNameChangeHandler = (event) => { 
        this.setState({enteredUsername: event.target.value}); 
        console.warn('userNameChangeHandler', event.target.value);
      } 
     
    // passwordChangeHandler = (event) => { 
    //     this.setState({enteredPassword: event.target.value}); 
    //   } 
     
    submitHandler = (event) => { 
        event.preventDefault();
      } 
    loginClick = (event) => {
      event.preventDefault();
      if (!this.state.enteredUsername) {
        this.setState({usernameClass: 'empty-username'});
        this.setState({usernamePlaceholder: 'enter your username'});
      } else {
        this.setState({usernameClass: ''})
      this.props.switchIsLogin(true); 
      this.props.changeUsername(this.state.enteredUsername); 
      this.setState({enteredUsername: ''}); 
      this.setState({enteredPassword: ''}); 
      this.props.switchIsLoginModal(false);
      }
    }
    render()  {
        return ( 
        <div className="login-modal"> 
          <form onSubmit={this.loginClick}> 
            <div> 
              <label>Username</label> 
              <input className={this.state.usernameClass} type="text" placeholder={this.state.usernamePlaceholder} value={this.enteredUsername} onChange={this.userNameChangeHandler} /> 
              {/* <label>Password</label> 
              <input type="password" value={this.enteredPassword} onChange={this.passwordChangeHandler} />  */}
            </div> 
            <button type="button" onClick={this.loginClick}>Login</button> 
          </form> 
        </div> 
      ) 
    }

}
export default LoginModal;
