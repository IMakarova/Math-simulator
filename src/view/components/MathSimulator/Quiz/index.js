import React, { Component } from 'react';
import { mixedOperation } from '../Operations';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      randomArr: [],
      score: 0
    }
  }
  

  formula = () => {
    console.log(this.state.randomArr);
    return `${this.state.randomArr[0]} ${this.state.randomArr[3]} ${this.state.randomArr[1]} =`;
  }

    startClick = (e) => {
    this.props.switchQuizIsStart(true);
        // this.props.switchTimerIsStart(true);
        console.log(this.props.state.timerIsStart, this.props.state.isQuiz);
    // this.setState({isStart: true});
    this.props.changeArr(mixedOperation());
    this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
  };

  checkClick = (e) => {

    
    const userResult = document.getElementById('result').value;
    if (Number(userResult) === this.state.randomArr[2]) {
      this.props.changeArr(mixedOperation());
      this.setState({randomArr: this.props.state.arr[Math.floor(Math.random() * this.props.state.arr.length)]});
      this.props.changeResult('');
      this.props.switchIsWrong(false);
      this.setState({score: this.state.score + 2});
      console.log(this.state.score);
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
  this.setState({score: this.state.score - 1});
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
      <>{this.props.state.timeIsOver && <div>Your score is {this.state.score}</div>}</>
      <>{!this.props.state.timeIsOver &&
      <><>{!this.props.state.quizIsStart && <><p>Quiz is going to start soon!</p>
      <button onClick={this.startClick}>Start</button></>}</>
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
