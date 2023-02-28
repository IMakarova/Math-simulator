import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { endTimerAction, negativeResultAction, bestResultAction  } from '../../../../redux-state/quiz/actions';

const mapStateToProps = (state, ownProps) => ({
  score: state?.quiz?.score,
  username: state?.auth?.username,
});

const mapDispatchToProps = ({
  endTimerAction,
  negativeResultAction,
  bestResultAction,
});

const Timer = ({ endTimerAction, negativeResultAction, bestResultAction, score, username }) => {
  const [timeLeft, setTimeLeft] = useState(90);
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
      timer.current = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    return () => {clearInterval(timer.current)};
  }, []);
  
  useEffect(() => {
    timerDisplay(timeLeft);
      if(!timeLeft && timer && timer.current){
        endTimerAction();
          if(score < 0) {
            negativeResultAction();
          }

        let currentBestResult;
        let newBestResults;
        try {
          currentBestResult = JSON.parse(localStorage.getItem('bestResults'));
        } catch (e) {}
        // console.log(currentBestResult[username], score);
        if(currentBestResult && currentBestResult[username] && score > currentBestResult[username]) {
          bestResultAction();
          newBestResults = { ...currentBestResult, [username]: score };
        } else if (currentBestResult && currentBestResult[username] && score <= currentBestResult[username]) {
          newBestResults = { ...currentBestResult};
        } else {
          newBestResults = { ...currentBestResult, [username]: score > 0 ? score : 0 };
        }
        localStorage.setItem('bestResults', JSON.stringify(newBestResults));
      }
  }, [timeLeft])

    return (
                <div id='timer-container'>{min} : {twoDigits(sec)}</div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);