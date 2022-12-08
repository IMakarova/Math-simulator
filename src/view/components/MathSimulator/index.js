import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class MathSimulator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    header: 'How to start?',
    isText: true,
    isOperation: false,
    operation: null,
    arr: [],
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
    score: 0,
    isLoginModal: false,
    src: '',
    isTable: false,
    bestScore: false,
    storage: null,
  }
}

  changeHeader = (val) => this.setState({header: val});
  switchIsText = (val) => this.setState({isText: val});
  switchIsOperation = (val) => this.setState({isOperation: val});
  changeOperation = (val) => this.setState({operation: val});
  changeArr = (val) => this.setState({arr: val});
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
  changeSrc = (val) => this.setState({src : val});
  changeScore = (val) => this.setState({score : val});
  switchIsTable = (val) => this.setState({isTable: val});
  switchBestScore = (val) => this.setState({bestScore: val});
  changeStorage = (val) => this.setState({ storage: val });

  render() {
    return (
    <div id="container">
      <Header state={this.state} switchIsLogin={this.switchIsLogin} changeUsername={this.changeUsername} switchIsLoginModal={this.switchIsLoginModal}    
        switchIsText={this.switchIsText} switchIsOperation={this.switchIsOperation} changeHeader={this.changeHeader} switchIsQuiz={this.switchIsQuiz} 
        switchIsWrong={this.switchIsWrong} switchIsRight={this.switchIsRight} changeSrc={this.changeSrc} switchIsTable={this.switchIsTable} />

      <Sidebar state={this.state} changeButton={this.changeButton} switchReadOnly={this.switchReadOnly} switchIsQuiz={this.switchIsQuiz} switchQuizIsStart={this.switchQuizIsStart} 
      switchIsWrong={this.switchIsWrong} switchIsRight={this.switchIsRight}changeComment={this.changeComment} changeResult={this.changeResult} 
      changeHeader={this.changeHeader} switchTimerIsStart={this.switchTimerIsStart} switchTimeIsOver={this.switchTimeIsOver} switchIsOperation={this.switchIsOperation} 
      changeOperation={this.changeOperation} switchIsText={this.switchIsText} changeArr={this.changeArr} switchIsTable={this.switchIsTable} changeStorage={this.changeStorage} />

      <Main state={this.state}  changeArr={this.changeArr} switchIsRight={this.switchIsRight} switchIsWrong={this.switchIsWrong} changeComment={this.changeComment} 
      changeButton={this.changeButton} changeResult={this.changeResult} switchReadOnly={this.switchReadOnly} switchQuizIsStart={this.switchQuizIsStart} 
      switchTimerIsStart={this.switchTimerIsStart} switchTimeIsOver={this.switchTimeIsOver} switchIsLoginModal={this.switchIsLoginModal} changeScore={this.changeScore} 
      switchBestScore={this.switchBestScore} />
      <Footer />
      {/* <div id="main">
     
        <div id={this.state.isOperation ? "operation-container" : "start-text"} 
        className={`${this.state.isOperation ? "operations" : ""} ${this.state.isRight ? "rightAnswer" : ""} ${this.state.isWrong ? "wrongAnswer" : ""}`}>
          <h2>{this.state.header}</h2>
          <>{this.state.isQuiz && <Timer state={this.state} switchQuizIsStart={this.switchQuizIsStart} switchTimerIsStart={this.switchTimerIsStart} 
          switchTimeIsOver={this.switchTimeIsOver} switchIsWrong={this.switchIsWrong} />}</>
          <>{this.state.isQuiz && <Quiz state={this.state} changeArr={this.changeArr} changeResult={this.changeResult} switchIsWrong={this.switchIsWrong} 
          switchQuizIsStart={this.switchQuizIsStart} switchTimerIsStart={this.switchTimerIsStart} changeScore={this.changeScore} switchIsLoginModal={this.switchIsLoginModal} 
          switchTimeIsOver={this.switchTimeIsOver} />}</>

          <>{!this.state.isQuiz && 
          <><div id={this.state.isOperation ? this.state.operation : ""} className={this.state.isOperation ? "operation" : ""} >
          {this.state.isText ? <p>Choose preferable math operation from the list on the left to start practicing your skills.</p> : ''}
          {this.state.isOperation && <Operation state={this.state} switchIsRight={this.switchIsRight} switchIsWrong={this.switchIsWrong} changeComment={this.changeComment} 
          changeArr={this.changeArr} changeButton={this.changeButton} changeResult={this.changeResult} />}  
          </div>
          <>{this.state.isOperation && <div id="comment">{this.state.comment}</div>}
          <>{this.state.isWrong &&<Answer changeComment={this.changeComment} state={this.state} switchReadOnly={this.switchReadOnly} />}</></></>}</>
        </div>
      </div> */}

    </div>
    )
  }

}

export default MathSimulator;