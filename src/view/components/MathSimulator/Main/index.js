import React, { PureComponent } from 'react';
import './style.css';
import Timer from '../Timer';
import Quiz from '../Quiz';
import Operation from '../Operation';
import Answer from '../Answer';
import ResultsTable from '../ResultsTable';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }
  
  render() {
    return (
        <div id="main">

        <h2>{this.props.state.header}</h2>

        {this.props.state.isText && <div id="start-text"><p>Choose preferable math operation from the list on the left to start practicing your skills.</p></div>}

        <>{this.props.state.isOperation && <><div id={this.props.state.isQuiz ? "quiz-container" : "operation-container"} className={`operations ${this.props.state.isRight ? "rightAnswer" : ""} 
        ${this.props.state.isWrong ? "wrongAnswer" : ""}`}>

          <>{this.props.state.isQuiz && <Timer state={this.props.state} switchQuizIsStart={this.props.switchQuizIsStart} switchTimerIsStart={this.props.switchTimerIsStart} 
          switchTimeIsOver={this.props.switchTimeIsOver} switchIsWrong={this.props.switchIsWrong} switchBestScore={this.props.switchBestScore} 
          changeScore={this.props.changeScore} />}</>

          <>{this.props.state.isQuiz && <Quiz state={this.props.state} changeArr={this.props.changeArr} changeResult={this.props.changeResult} 
          switchIsWrong={this.props.switchIsWrong} switchQuizIsStart={this.props.switchQuizIsStart} switchTimerIsStart={this.props.switchTimerIsStart} 
          changeScore={this.props.changeScore} switchIsLoginModal={this.props.switchIsLoginModal} switchTimeIsOver={this.props.switchTimeIsOver} 
          switchBestScore={this.props.switchBestScore} />}</>

          <>{!this.props.state.isQuiz && 
          <><div id={this.props.state.operation} className="operation">

          {this.props.state.isOperation && <Operation state={this.props.state} switchIsRight={this.props.switchIsRight} switchIsWrong={this.props.switchIsWrong} 
          changeComment={this.props.changeComment} changeArr={this.props.changeArr} changeButton={this.props.changeButton} changeResult={this.props.changeResult} />}  
          </div>

          <>{this.props.state.isOperation && <div id="comment">{this.props.state.comment}</div>}

          <>{this.props.state.isWrong &&<Answer changeComment={this.props.changeComment} state={this.props.state} switchReadOnly={this.props.switchReadOnly} />}</></></>}</>
          </div>
          </>}</>
          {this.props.state.isTable && <ResultsTable />}

      </div>
    );
  }
}

export default Main;