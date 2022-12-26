import React from 'react';
import './style.css';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  username: state.auth.username,
  src: state.auth.src
});

const Avatar = ({ username, src }) => {
  return (
          <div id='user'>
            <div id="username">{username}</div>
            <div id="avatar">
              <img alt='avatar' src={src}></img>
            </div>
          </div>
  );
};

export default connect(mapStateToProps)(Avatar);
