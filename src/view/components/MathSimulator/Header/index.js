import { useLocation } from 'react-router-dom';
import LoginLogout from '../LoginLogout';
import HomePage from '../HomePage';
import Avatar from '../Avatar';
import Title from '../Title';
import './style.css';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state?.auth?.isLogin,
});

const Header = ({ isLogin }) => {
  const location = useLocation();

  return (
    <div id="header">
      {location.pathname !== '/' && <HomePage />}
      <Title />
      {isLogin && <Avatar />}
      <LoginLogout />
    </div>
  );
};

export default connect(mapStateToProps)(Header);
