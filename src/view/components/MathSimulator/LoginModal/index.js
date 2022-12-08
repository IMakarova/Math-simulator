import React, { PureComponent } from 'react';
import './style.css';

class LoginModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          props,
            enteredUsername: '',
            enteredPassword: '',
            usernameClass: '',
            usernamePlaceholder: ''
        }
    }

    generateSrc = () => {
      const url = 'https://robohash.org/' + this.state.enteredUsername + '.png?set=set4';
      const urlString = JSON.stringify(url)
      this.props.changeSrc({urlString});
  }

    userNameChangeHandler = (event) => { 
        this.setState({usernameClass: ''})
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
      this.generateSrc();
      this.setState({enteredUsername: ''}); 
      this.setState({enteredPassword: ''}); 
      this.props.switchIsLoginModal(false);
      }
    }

    closeClick = (event) => {
      // event.preventDefault();
      this.props.switchIsLoginModal(false);
    }

//     componentDidMount() {
//       console.log(typeof this.closeClick)
//       window.addEventListener = ('keydown', (event) => {
//         // if (true) {
// console.log('ok');
//           this.closeClick();
//         // }
//       })
//     }

    render()  {
        return ( 
        <div className="login-modal"> 
          <div id='modal-window'>
          <button id='close' onClick={this.closeClick}>&#x2715;</button>
          <form onSubmit={this.loginClick}> 

            <div id='modal-form'> 
              <label>Username</label> 
              <input className={this.state.usernameClass} type="text" placeholder={this.state.usernamePlaceholder} value={this.enteredUsername} onChange={this.userNameChangeHandler} /> 
              {/* <label>Password</label> 
              <input type="password" value={this.enteredPassword} onChange={this.passwordChangeHandler} />  */}
            </div> 
            <button type="submit">Login</button> 
          </form> 
          </div>
        </div> 
      ) 
    }
}

export default LoginModal;
