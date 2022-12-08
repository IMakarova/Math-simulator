import React, { PureComponent } from 'react';
import LoginLogout from '../LoginLogout';
import { mixedOperation } from '../Operations';
import './style.css';

class Quiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
      randomArr: [],
      score: 0,

    }
  }
  
componentDidMount() {
  console.log(this.state)
}
  formula = () => {
    console.log(this.state.randomArr);
    return `${this.state.randomArr[0]} ${this.state.randomArr[3]} ${this.state.randomArr[1]} =`;
  }

    startClick = (e) => {    
      this.props.changeResult('');
      this.props.switchTimerIsStart(false);
      this.props.switchTimeIsOver(false);
      // this.props.switchQuizIsStart(false);
    this.props.switchQuizIsStart(true);
    this.props.changeScore(0);
        // this.props.switchTimerIsStart(true);
        console.log(this.props.state.timerIsStart, this.props.state.isQuiz);
    // this.setState({isStart: true});
    this.props.changeArr(mixedOperation());
    this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
    this.props.switchBestScore(false);
  };

  checkClick = (e) => {

    
    const userResult = document.getElementById('result').value;
    if (Number(userResult) === this.state.randomArr[2]) {
      this.props.changeArr(mixedOperation());
      this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
      this.props.changeResult('');
      this.props.switchIsWrong(false);
      this.props.changeScore(this.props.state.score + 2);
      console.log(this.props.state.score);
    } 
    else {
      this.props.switchIsWrong(true);
    }
}
enterClick = (e) => {
    e.preventDefault();
console.log('Enter pressed');
}
skipClick = (e) => {
  this.props.changeResult('');
  this.props.changeArr(mixedOperation());
  this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
  this.props.switchIsWrong(false);
  this.props.changeScore(this.props.state.score - 1);
}

setResult = (event) => {
  const result = (event.target.validity.valid) ? event.target.value : this.props.state.result;
    this.props.changeResult(result);
  }

  render() {return (
    // <><div id='timer' className={!this.state.isStart ? 'hidden' : ''}></div>
    <>
    {/* <>{this.props.state.isQuiz && <Timer state={this.state} 
    // switchQuizIsStart={this.switchQuizIsStart} switchTimerIsStart={this.switchTimerIsStart} 
    //       switchTimeIsOver={this.switchTimeIsOver} 
          />}</> */}
    <div className={`${this.props.state.quizIsStart ? 'operation' : 'start-page'} ${this.props.state.isWrong ? "wrongAnswer" : ""}`} id='quiz-container'>
      <>{this.props.state.timeIsOver && <><div id='quiz-end'><div>Your score is {this.props.state.score >= 0 ? this.props.state.score : 0}.</div>
      {this.props.state.bestScore && <div id='best'>Congratulations! This is your best result!</div>}
      <p>Do you want to try one more time?</p>
      <button onClick={this.startClick}>Start</button>
      </div>
      </>}</>
      <>{!this.props.state.timeIsOver &&
      <><>{!this.props.state.quizIsStart && <><p>You will have 3 minutes to solve as much math problems as you can.</p>
      <p>Type your answer and press "check" button.</p>
      <p>If it is right, you'll immediatly get next problem.</p>
      <p>If wrong - you may try another answer as many times as you want or skip the problem.</p>
      <p>You can skip even without typing any answer.</p>
      <p>When your answer is right, you'll get +2 points to your score. If you skip, you'll get -1 point.</p>
      <p>If your final score will be negative, it'll be transformed to 0 points.</p>
      {this.props.state.isLogin ? <><p className='last'>Are you ready now?</p><button onClick={this.startClick}>Start</button></> :
      <><p className='last'>To start quiz you need to login!</p><LoginLogout state={this.props.state} switchIsLoginModal={this.props.switchIsLoginModal} /></>}</>}</>
      <>{this.props.state.quizIsStart && <>
        <div>{this.formula()}</div>
        <form onSubmit={this.enterClick}>
        <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
        onChange={this.setResult} value={this.props.state.result} />
        <button id="check-result" type='submit' onClick={this.checkClick}>check</button>
        <button id="skip" onClick={this.skipClick}>skip</button>
        </form>
        </>}</>
      </>}</>
    </div>
     </>
  );
}
}
export default Quiz;
