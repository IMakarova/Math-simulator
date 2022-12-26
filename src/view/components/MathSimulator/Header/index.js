import React from 'react';
import LoginLogout from '../LoginLogout';
import HomePage from '../HomePage';
import Avatar from '../Avatar';
import LoginModal from '../LoginModal';
import Title from '../Title';
import './style.css';
import { startPageAction } from '../../../../redux-state/main/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.auth.isLogin,
  isLoginModal: state.auth.isLoginModal,
  isText: state.main.isText
});

const mapDispatchToProps = ({
  startPageAction,
});


const Header = ({ startPageAction, isLogin, isLoginModal, isText }) => {

  const homeClick = (e) => {
    startPageAction();
  };

  return (
    <div id="header">
      {!isText && <HomePage homeClick={homeClick} />}
      <Title homeClick={homeClick} />
      {isLogin && <Avatar />}
      <LoginLogout />
      {isLoginModal && <LoginModal />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
