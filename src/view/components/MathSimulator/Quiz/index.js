import React, { useEffect, useState} from 'react';
import confetti from 'canvas-confetti';
import LoginLogout from '../LoginLogout';
import Timer from '../Timer';
import { mixedOperation } from '../Operations';
import './style.css';
import { connect } from 'react-redux';
import { startQuizAction, nextQuizAction, wrongQuizAction, getResultAction, quitQuizAction } from '../../../../redux-state/quiz/actions';

const mapStateToProps = (state, ownProps) => ({
  operationsMix: state?.quiz?.operationsMix,
  score: state?.quiz?.score,
  result: state?.quiz?.result,
  timeIsOver: state?.quiz?.timeIsOver,
  isWrong: state?.quiz?.isWrong,
  quizIsStart: state?.quiz?.quizIsStart,
  isLogin: state?.auth?.isLogin,
  bestScore: state?.quiz?.bestScore,
});

const mapDispatchToProps = ({
  startQuizAction,
  nextQuizAction,
  wrongQuizAction,
  getResultAction,
  quitQuizAction,
});

const Quiz = ({ startQuizAction, nextQuizAction, wrongQuizAction, getResultAction, quitQuizAction,
  operationsMix, score, result, isWrong, timeIsOver, quizIsStart, isLogin, bestScore, children }) => {
  const [randomOperation, setRandomOperation] = useState(operationsMix[Math.floor(Math.random() * operationsMix.length)]);

  useEffect(() => {
    return quitQuizAction;
  }, [])
  
const confettiFire = () => {
  
  const count = 300;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

  const formula = () => {
    return `${randomOperation[0]} ${randomOperation[3]} ${randomOperation[1]} =`;
  }

    const startClick = (e) => {    
      startQuizAction();
      setRandomOperation(operationsMix[Math.floor(Math.random() * operationsMix.length)]);
  };

  const checkClick = (e) => {
    const userResult = document.getElementById('result').value;
    if (Number(userResult) === randomOperation[2]) {
      nextQuizAction(score + 2, mixedOperation());
      setRandomOperation(operationsMix[Math.floor(Math.random() * operationsMix.length)]);
    } 
    else {
      wrongQuizAction();
    }
}

const enterClick = (e) => {
    e.preventDefault();
}

const skipClick = (e) => {
  setRandomOperation(operationsMix[Math.floor(Math.random() * operationsMix.length)]);
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
                <><div id='best'>Congratulations! This is your best result!</div>{confettiFire()}
                {/* <Confetti /> */}
                {/* {children} */}
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
