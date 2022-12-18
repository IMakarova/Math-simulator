import React, { PureComponent } from 'react';
import './style.css';
import { Route } from 'react-router-dom';
// import Timer from '../Timer';
import Quiz from '../Quiz';
import Operation from '../Operation';
import Answer from '../Answer';
import ResultsTable from '../ResultsTable';
import SidebarContext from '../../../../context/sidebar-context';
import AuthContext from '../../../../context/auth-context';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }
  
  render() {
    return (
      <AuthContext.Consumer>
      {(context) => {
        return (
      <SidebarContext.Consumer>
      {(context) => {
        return (
        <div id="main">
            <Route path='*'>
              <h2>{context.header}</h2>
              </Route>
            {context.isText && 
              <Route path='/' exact>
                <div id="start-text"><p>Choose preferable math operation from the list on the left to start practicing your skills.</p></div>
              </Route>
            }
        {/* <h2>{context.header}</h2>

        {context.isText && <div id="start-text"><p>Choose preferable math operation from the list on the left to start practicing your skills.</p></div>} */}

        <>{context.isOperation && <><div id={context.isQuiz ? "quiz-container" : "operation-container"} className={`operations ${context.isRight ? "rightAnswer" : ""} 
        ${context.isWrong ? "wrongAnswer" : ""}`}>

          {/* <>{context.isQuiz && <Timer />}</> */}

          <>{context.isQuiz && 
            <Route path='/quiz'>
              {/* <h2>{context.header}</h2> */}
              <Quiz />
            </Route>}</>

          <>{!context.isQuiz && 
          <><div id={context.operation} className="operation">

          {context.isOperation && <Operation />}  
          </div>

          <>{context.isOperation && <div id="comment">{context.comment}</div>}

          <>{context.isWrong &&<Answer />}</></></>}</>
          </div>
          </>}</>
          {context.isTable && <ResultsTable />}

      </div>
        )
      }}
      </SidebarContext.Consumer>
              )
            }}
            </AuthContext.Consumer>
    );
  }
}

export default Main;