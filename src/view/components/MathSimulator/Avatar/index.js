import React, { useContext } from 'react';
import './style.css';
import AuthContext from '../../../../context/auth-context';

const Avatar = () => {
  const context = useContext(AuthContext);

  const getUrl = () => {
    let url = context.src;
    url = url.replaceAll('"', '');
    return url;
  };

  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <div id="avatar">
            <img alt='avatar' src={getUrl()}></img>
            <div id="username">{context.username}</div>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Avatar;
