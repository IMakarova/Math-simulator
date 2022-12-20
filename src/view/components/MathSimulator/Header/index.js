import React, { useContext } from 'react';
import LoginLogout from '../LoginLogout';
import HomePage from '../HomePage';
import Avatar from '../Avatar';
import LoginModal from '../LoginModal';
import Title from '../Title';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import AuthContext from '../../../../context/auth-context';

const Header = () => {
  const context = useContext(SidebarContext);
  const loginContext = useContext(AuthContext);

  const homeClick = (e) => {
    // console.log(context.isText);
    context.startPageAction();
    // console.log(context.isText);
  };

  return (
    <div id="header">
      {!context.isText && <HomePage homeClick={homeClick} />}
      <Title homeClick={homeClick} />
      {loginContext.isLogin && <Avatar />}
      <LoginLogout />
      {loginContext.isLoginModal && <LoginModal />}
    </div>
  );
};

export default Header;
