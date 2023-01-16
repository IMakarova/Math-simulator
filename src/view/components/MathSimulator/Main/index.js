import React from 'react';
import './style.css';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Quiz from '../Quiz';
import Operation from '../Operation';
import BestResults from '../BestResults';
import Confetti from '../Confetti';
// import { connect } from 'react-redux';

const Main = () => {
  const location = useLocation(); 
    return (
        <div id="main">
          <h2>{ location.pathname === '/' ? 'How to start?' : location.pathname.replace('/', '').replace('-', ' ') }</h2>
            <Switch>
              <Route path='/' exact>
                <div id="start-text"><p>Choose preferable math operation from the list on the left to start practicing your skills.</p></div>
              </Route>
            <Route path={ ['/addition', '/substraction', '/multiplication', '/division'] }>
              <Operation />
            </Route>
              <Route path='/quiz'>
                <Quiz>
                  <Confetti />
                </Quiz>
              </Route>
            <Route path='/best-results'>
              <BestResults />
            </Route>
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
      </div>
    );
}

export default Main;