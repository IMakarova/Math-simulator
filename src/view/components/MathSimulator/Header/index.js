import React, { useContext } from 'react';
import LoginLogout from '../LoginLogout';
import HomePage from '../HomePage';
import Avatar from '../Avatar';
import LoginModal from '../LoginModal';
import Title from '../Title';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import { connect } from 'react-redux';
// import AuthContext from '../../../../context/auth-context';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.isLogin,
  isLoginModal: state.isLoginModal,
});

const Header = ({ isLogin, isLoginModal }) => {
  const context = useContext(SidebarContext);
  // const loginContext = useContext(AuthContext);

  const homeClick = (e) => {
    // console.log(context.isText);
    context.startPageAction();
    // console.log(context.isText);
  };

  return (
    <div id="header">
      {!context.isText && <HomePage homeClick={homeClick} />}
      <Title homeClick={homeClick} />
      {isLogin && <Avatar />}
      <LoginLogout />
      {isLoginModal && <LoginModal />}
    </div>
  );
};

export default connect(mapStateToProps)(Header);
