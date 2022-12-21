import React, { useContext } from 'react';
import './style.css';
// import AuthContext from '../../../../context/auth-context';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  username: state.username,
  src: state.src
});

const Avatar = ({ username, src }) => {
  // const context = useContext(AuthContext);

  // const getUrl = () => {
  //   let url = context.src;
  //   url = url.replaceAll('"', '');
  //   return url;
  // };

  return (
    // <AuthContext.Consumer>
    //   {(context) => {
    //     return (
          <div id='user'>
            <div id="username">{username}</div>
            <div id="avatar">
              <img alt='avatar' src={src}></img>
            </div>
          </div>
    //     );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default connect(mapStateToProps)(Avatar);
