import React, { useState} from 'react';
import LoginLogout from '../LoginLogout';
import Timer from '../Timer';
import { mixedOperation } from '../Operations';
import './style.css';
import { connect } from 'react-redux';
import { startQuizAction, nextQuizAction, wrongQuizAction, getResultAction } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  operationNumbers: state?.main?.operationNumbers,
  score: state?.main?.score,
  result: state?.main?.result,
  timeIsOver: state?.main?.timeIsOver,
  isWrong: state?.main?.isWrong,
  quizIsStart: state?.main?.quizIsStart,
  isLogin: state?.auth?.isLogin,
  bestScore: state?.main?.bestScore,
  operationMark: state?.main?.operationMark
});

const mapDispatchToProps = ({
  startQuizAction,
  nextQuizAction,
  wrongQuizAction,
  getResultAction,
});

const Quiz = ({ startQuizAction, nextQuizAction, wrongQuizAction, getResultAction, operationNumbers, 
  score, result, isWrong, timeIsOver, quizIsStart, isLogin, bestScore, operationMark, children }) => {
  const [randomOperation, setRandomOperation] = useState([]);
  const [randomOperationMark, setRandomOperationMark] = useState([]);

  const formula = () => {

    return `${randomOperation[0]} ${randomOperationMark} ${randomOperation[1]} =`;
  }

    const startClick = (e) => {    
      startQuizAction();
      setRandomOperation(operationNumbers[Math.floor(Math.random() * operationNumbers.length)]);
      setRandomOperationMark(operationMark);
  };

  const checkClick = (e) => {
    const userResult = document.getElementById('result').value;
    if (Number(userResult) === randomOperation[2]) {
      nextQuizAction(score + 2, mixedOperation());
      setRandomOperation(operationNumbers[Math.floor(Math.random() * operationNumbers.length)]);
      console.log(randomOperation);
      setRandomOperationMark(randomOperation[3]);
    } 
    else {
      wrongQuizAction();
    }
}

const enterClick = (e) => {
    e.preventDefault();
}

const skipClick = (e) => {
  setRandomOperation(operationNumbers[Math.floor(Math.random() * operationNumbers.length)]);
  nextQuizAction(score - 1, mixedOperation());
}

const setResult = (event) => {
  const currentResult = (event.target.validity.valid) ? event.target.value : result;
  getResultAction(currentResult);
  }

    return (
    <div id='quiz-container' className={`operations ${isWrong ? "wrongAnswer" : ""}`}>
      {timeIsOver && <div id='timer-end'>Time is over!</div>}
      <>
    <>{quizIsStart && 
      <Timer />
    }</>
      <div className={`${quizIsStart ? 'operation' : 'start-page'} ${isWrong ? "wrongAnswer" : ""}`} id={quizIsStart ? 'quiz' : 'quiz-rules'}>
          <>
            {timeIsOver && 
              <>
                <div id='quiz-end'><div>Your score is <span>{score >= 0 ? score : 0}</span>.</div>
                {bestScore && 
                <><div id='best'>Congratulations! This is your best result!</div>
                {/* <Confetti /> */}
                {children}
                </>}
                <p>Do you want to try one more time?</p>
                <button onClick={startClick}>Start</button>
                </div>
              </>
            }
          </>
        <>{!timeIsOver &&
            <>{!quizIsStart && <><p>You will have 1,5 minutes to solve as much math problems as you can.</p>
              <p>Type your answer and press "check" button.</p>
              <p>If it is right, you'll immediatly get next problem.</p>
              <p>If wrong - you may try another answer as many times as you want or skip the problem.</p>
              <p>You can skip even without typing any answer.</p>
              <p>When your answer is right, you'll get +2 points to your score. If you skip, you'll get -1 point.</p>
              <p>If your final score will be negative, it'll be transformed to 0 points.</p>
              {isLogin ? 
                <>
                  <p className='last'>Are you ready now?</p><button onClick={startClick}>Start</button>
                </> :
                <>
                  <p className='last'>To start quiz you need to login!</p>
                  <LoginLogout />
                </>
              }
              </>
            }</>
        }</>
          <>{quizIsStart && 
            <>
              <div>{formula()}</div>
              <form onSubmit={enterClick}>
              <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
              onChange={setResult} value={result} />
              <button id="check-result" type='submit' onClick={checkClick}>check</button>
              <button id="skip" onClick={skipClick}>skip</button>
              </form>
            </>
          }</>
      </div>
      </>
      </div>        
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
