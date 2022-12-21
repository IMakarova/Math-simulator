import React, { useContext, useState} from 'react';
import LoginLogout from '../LoginLogout';
import Timer from '../Timer';
import { mixedOperation } from '../Operations';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import AuthContext from '../../../../context/auth-context';
import Confetti from '../Confetti';

const Quiz = () => {
  const context = useContext(SidebarContext);
  // const loginContext = useContext(AuthContext);
  const [randomArr, setRandomArr] = useState([]);

  const formula = () => {
    return `${randomArr[0]} ${randomArr[3]} ${randomArr[1]} =`;
  }

    const startClick = (e) => {    
    context.startQuizAction();
    setRandomArr(context.arr[Math.floor(Math.random() * context.arr.length)]);
  };

  const checkClick = (e) => {

    
    const userResult = document.getElementById('result').value;
    if (Number(userResult) === randomArr[2]) {
      // console.log(context.score)
      setRandomArr(context.arr[Math.floor(Math.random() * context.arr.length)]);
      console.log('+2', context.score);
      context.rightQuizAction(context.score + 2, mixedOperation());
    } 
    else {
      context.wrongQuizAction();
    }
}

const enterClick = (e) => {
    e.preventDefault();
console.log('Enter pressed');
}

const skipClick = (e) => {
  setRandomArr(context.arr[Math.floor(Math.random() * context.arr.length)]);

  context.rightQuizAction(context.score - 1, mixedOperation());
}

const setResult = (event) => {
  const result = (event.target.validity.valid) ? event.target.value : context.result;
  context.getResultAction(result);
  }

    return (
      <AuthContext.Consumer>
      {(loginContext) => {
        return (
      <SidebarContext.Consumer>
      {(context) => {
        return (
    <div id='quiz-container' className={`operations ${context.isWrong ? "wrongAnswer" : ""}`}>
      {context.timeIsOver && <div id='timer-end'>Time is over!</div>}
      <>
    <>{context.quizIsStart && 
      <Timer />
    }</>
      <div className={`${context.quizIsStart ? 'operation' : 'start-page'} ${context.isWrong ? "wrongAnswer" : ""}`} id={context.quizIsStart ? 'quiz' : 'quiz-rules'}>
          <>
            {context.timeIsOver && 
              <>
                <div id='quiz-end'><div>Your score is <span>{context.score >= 0 ? context.score : 0}</span>.</div>
                {context.bestScore && 
                <><div id='best'>Congratulations! This is your best result!</div>
                <Confetti /></>}
                <p>Do you want to try one more time?</p>
                <button onClick={startClick}>Start</button>
                </div>
              </>
            }
          </>

        <>{!context.timeIsOver &&
            <>{!context.quizIsStart && <><p>You will have 3 minutes to solve as much math problems as you can.</p>
              <p>Type your answer and press "check" button.</p>
              <p>If it is right, you'll immediatly get next problem.</p>
              <p>If wrong - you may try another answer as many times as you want or skip the problem.</p>
              <p>You can skip even without typing any answer.</p>
              <p>When your answer is right, you'll get +2 points to your score. If you skip, you'll get -1 point.</p>
              <p>If your final score will be negative, it'll be transformed to 0 points.</p>
              {loginContext.isLogin ? 
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

          <>{context.quizIsStart && 
            <>
              <div>{formula()}</div>
              <form onSubmit={enterClick}>
              <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
              onChange={setResult} value={context.result} />
              <button id="check-result" type='submit' onClick={checkClick}>check</button>
              <button id="skip" onClick={skipClick}>skip</button>
              </form>
            </>
          }</>
      </div>
      </>
      </div>           )
            }}
            </SidebarContext.Consumer>
                          )
                        }}
                        </AuthContext.Consumer>
  );
// }
}

export default Quiz;
