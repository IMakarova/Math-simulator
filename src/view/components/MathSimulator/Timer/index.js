import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { endTimerAction, startTimerAction, negativeResultAction, bestResultAction  } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  score: state.main.score,
  username: state.auth.username,
});

const mapDispatchToProps = ({
  endTimerAction,
  startTimerAction,
  negativeResultAction,
  bestResultAction,
});

const Timer = ({ endTimerAction, startTimerAction, negativeResultAction, bestResultAction, score, username }) => {
  const [timeLeft, setTimeLeft] = useState(70);
  const [min, setMin] = useState (0);
  const [sec, setSec] = useState (0);
  const timer = useRef(null);

  const twoDigits = (n) => {
    return (n <= 9 ? "0" + n : n);
  }

  const timerDisplay = (timeLeft) => {
        const time = new Date(timeLeft * 1000);
        setMin(time.getUTCMinutes());
        setSec(time.getUTCSeconds());
  }

  useEffect(() => {
    startTimerAction();
      timer.current = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    return () => {clearInterval(timer.current)};
  }, []);
  
  useEffect(() => {
    timerDisplay(timeLeft);
      if(!timeLeft && timer && timer.current){
        endTimerAction();
          console.log('endTimerAction')
          if(score < 0) {
            negativeResultAction();
            console.log('negativeResultAction')
          }
          if(localStorage.getItem(username) && score > localStorage.getItem(username)) {
            bestResultAction();
            // console.log('bestResultAction')
           }
          localStorage.setItem(username, 
            localStorage.getItem(username) > score ? localStorage.getItem(username) : 
            score > 0 ? score : 0);
            // console.log(localStorage.getItem(username));
      }
  }, [timeLeft])

    return (
                <div id='timer-container'>{min} : {twoDigits(sec)}</div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);