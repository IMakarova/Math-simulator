import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Operation from './Operation';
import Answer from './Answer';
import Quiz from './Quiz';
import Timer from './Timer';
import HomePage from './HomePage';
import LoginLogout from './LoginLogout';
import LoginModal from './LoginModal';

class MathSimulator extends Component {
  state = { 
    header: 'How to start?',
    isText: true,
    isOperation: false,
    operation: null,
    arr: [],
    sign: null,
    isRight: false,
    isWrong: false,
    comment: null,
    button: 'check',
    result: '',
    readOnly: false,
    isQuiz: false,
    quizIsStart: false,
    timerIsStart: false,
    timeIsOver: false,
    isLogin: false,
    username: '',
    isLoginModal: false
  }

  changeHeader = (val) => this.setState({header: val});
  switchIsText = (val) => this.setState({isText: val});
  switchIsOperation = (val) => this.setState({isOperation: val});
  changeOperation = (val) => this.setState({operation: val});
  changeArr = (val) => this.setState({arr: val});
  changeSign = (val) => this.setState({sign: val});
  switchIsRight = (val) => this.setState({isRight: val});
  switchIsWrong = (val) => this.setState({isWrong: val});
  changeComment = (val) => this.setState({comment: val});
  changeButton = (val) => this.setState({button: val});
  changeResult = (val) => this.setState({result: val});
  switchReadOnly = (val) => this.setState({readOnly: val});
  switchIsQuiz = (val) => this.setState({isQuiz: val});
  switchQuizIsStart = (val) => this.setState({quizIsStart: val});
  switchTimerIsStart = (val) => this.setState({timerIsStart: val});
  switchTimeIsOver = (val) => this.setState({timeIsOver: val});
  switchIsLogin = (val) => this.setState({isLogin: val});
  changeUsername = (val) => this.setState({username: val});
  switchIsLoginModal = (val) => this.setState({isLoginModal : val});

  render() {
    return (
    <div id="container">
      <div id="header"><LoginLogout switchIsLogin={this.switchIsLogin} changeUsername={this.changeUsername} switchIsLoginModal ={this.switchIsLoginModal} state={this.state} />
      <h1>Math simulator. Operations within 1000</h1><HomePage state={this.state} switchIsText={this.switchIsText} 
      switchIsOperation={this.switchIsOperation} changeHeader={this.changeHeader} switchIsQuiz={this.switchIsQuiz} switchIsWrong={this.switchIsWrong} 
      switchIsRight={this.switchIsRight} /></div>
      {this.state.isLoginModal && <LoginModal state={this.state} switchIsLogin={this.switchIsLogin} changeUsername={this.changeUsername} switchIsLoginModal={this.switchIsLoginModal} />}

      <Sidebar changeHeader={this.changeHeader} switchIsText={this.switchIsText} switchIsOperation={this.switchIsOperation} changeOperation={this.changeOperation} state={this.state}
      changeArr={this.changeArr} changeSign={this.changeSign} switchIsRight={this.switchIsRight} switchIsWrong={this.switchIsWrong} changeComment={this.changeComment} 
      changeResult={this.changeResult} switchIsQuiz={this.switchIsQuiz} changeRandomArr={this.changeRandomArr} switchTimerIsStart={this.switchTimerIsStart} 
      switchQuizIsStart={this.switchQuizIsStart} switchReadOnly={this.switchReadOnly} changeButton={this.changeButton} switchTimeIsOver={this.switchTimeIsOver} />

      <div id="main">
        <>{this.state.username}</>
        <div id={this.state.isOperation ? "operation-container" : "start-text"} 
        className={`${this.state.isOperation ? "operations" : ""} ${this.state.isRight ? "rightAnswer" : ""} ${this.state.isWrong ? "wrongAnswer" : ""}`}>
          <h2>{this.state.header}</h2>
          <>{this.state.isQuiz && <Timer state={this.state} switchQuizIsStart={this.switchQuizIsStart} switchTimerIsStart={this.switchTimerIsStart} 
          switchTimeIsOver={this.switchTimeIsOver} />}</>
          <>{this.state.isQuiz && <Quiz state={this.state} changeArr={this.changeArr} changeResult={this.changeResult} switchIsWrong={this.switchIsWrong} 
          switchQuizIsStart={this.switchQuizIsStart} switchTimerIsStart={this.switchTimerIsStart} />}</>
          {/* <>{this.state.timeIsOver && <div>Time is over!!!</div>}</> */}

          <>{!this.state.isQuiz && 
          <><div id={this.state.isOperation ? this.state.operation : ""} className={this.state.isOperation ? "operation" : ""} >
          {this.state.isText ? <p>Choose preferable math operation from the list on the left to start practicing your skills.</p> : ''}
          {this.state.isOperation && <Operation state={this.state} switchIsRight={this.switchIsRight} switchIsWrong={this.switchIsWrong} changeComment={this.changeComment} 
          changeArr={this.changeArr} changeButton={this.changeButton} changeResult={this.changeResult} />}  
          </div>
          <>{this.state.isOperation && <div id="comment">{this.state.comment}</div>}
          <>{this.state.isWrong &&<Answer changeComment={this.changeComment} state={this.state} switchReadOnly={this.switchReadOnly} />}</></></>}</>
        </div>
      </div>
      <div id="footer">
        <div id="copyright">&copy; Irina Makarova</div>
        <div id="year">2022</div>
      </div>
    </div>
    )
  }

}

export default MathSimulator;