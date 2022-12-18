import React, { PureComponent, useContext, useState} from 'react';
import LoginLogout from '../LoginLogout';
import Timer from '../Timer';
import { mixedOperation } from '../Operations';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import AuthContext from '../../../../context/auth-context';
import Confetti from '../Confetti';

// class Quiz extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       props,
//       randomArr: [],
//       score: 0,

//     }
//   }
const Quiz = () => {
  const context = useContext(SidebarContext);
  const loginContext = useContext(AuthContext);
  const [randomArr, setRandomArr] = useState([]);
  // const [score, setScore] = useState(0);
// componentDidMount() {
//   console.log(this.state)
// }
  const formula = () => {
    // console.log(this.state.randomArr);
    return `${randomArr[0]} ${randomArr[3]} ${randomArr[1]} =`;
  }

    const startClick = (e) => {    
      // this.props.changeResult('');
      // this.props.switchTimerIsStart(false);
      // this.props.switchTimeIsOver(false);
      // this.props.switchQuizIsStart(false);
    // this.props.switchQuizIsStart(true);
    // this.props.changeScore(0);
        // this.props.switchTimerIsStart(true);
        // console.log(this.props.state.timerIsStart, this.props.state.isQuiz);
    // this.setState({isStart: true});
    // this.props.changeArr(mixedOperation());
    context.startQuizAction();

    // this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
    setRandomArr(context.arr[Math.floor(Math.random() * context.arr.length)]);
    // console.log(randomArr, context.arr);
    // this.props.switchBestScore(false);
  };

  const checkClick = (e) => {

    
    const userResult = document.getElementById('result').value;
    if (Number(userResult) === randomArr[2]) {
      // this.props.changeArr(mixedOperation());
      // this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
      // this.props.changeResult('');
      // this.props.switchIsWrong(false);
      // this.props.changeScore(this.props.state.score + 2);
      // console.log(this.props.state.score);
      console.log(context.score)
      setRandomArr(context.arr[Math.floor(Math.random() * context.arr.length)]);
      // setScore(score + 2);
      console.log('+2', context.score);
      context.rightQuizAction(context.score + 2, mixedOperation());
    } 
    else {
      context.wrongQuizAction();
      // this.props.switchIsWrong(true);
    }
}

const enterClick = (e) => {
    e.preventDefault();
console.log('Enter pressed');
}

const skipClick = (e) => {
  setRandomArr(context.arr[Math.floor(Math.random() * context.arr.length)]);
  // setScore(score - 1);
  context.rightQuizAction(context.score - 1, mixedOperation());
  // this.props.changeResult('');
  // this.props.changeArr(mixedOperation());
  // this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
  // this.props.switchIsWrong(false);
  // this.props.changeScore(this.props.state.score - 1);
}

const setResult = (event) => {
  const result = (event.target.validity.valid) ? event.target.value : context.result;
  context.getResultAction(result);
    // this.props.changeResult(result);
  }

  // render() {
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
