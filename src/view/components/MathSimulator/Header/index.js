import React, { PureComponent } from 'react';
import LoginLogout from '../LoginLogout';
import HomePage from '../HomePage';
import Avatar from '../Avatar';
import LoginModal from '../LoginModal';
import Title from '../Title';
import './style.css';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }
  componentDidMount() {
    console.log(this.state);
  }

  homeClick = (e) => {
  this.props.switchIsText(true);
  this.props.switchIsOperation(false);
  this.props.changeHeader('How to start?');
  this.props.switchIsQuiz(false);
  this.props.switchIsRight(false);
  this.props.switchIsWrong(false);
  document.querySelector('.active').classList.remove('active');
  this.props.switchIsTable(false);
  }

  render() {
    return (
      <div id="header">

        {!this.props.state.isText && (
          <HomePage homeClick = {this.homeClick} />
        )}

        <Title homeClick = {this.homeClick} state={this.props.state} />

        {this.props.state.isLogin && <Avatar state={this.props.state} />}

        <LoginLogout
          switchIsLogin={this.props.switchIsLogin}
          changeUsername={this.props.changeUsername}
          switchIsLoginModal={this.props.switchIsLoginModal}
          state={this.props.state}
        />

        {this.props.state.isLoginModal && (
          <LoginModal
            state={this.props.state}
            switchIsLogin={this.props.switchIsLogin}
            changeUsername={this.props.changeUsername}
            switchIsLoginModal={this.props.switchIsLoginModal}
            changeSrc={this.props.changeSrc}
          />
        )}
      </div>
    );
  }
}

export default Header;
