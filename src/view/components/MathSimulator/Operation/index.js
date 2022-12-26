import React, { useEffect } from 'react';
import { add, sub, mul, div } from '../Operations';
// import SidebarContext from '../../../../context/sidebar-context';
import Answer from '../Answer';
import { connect } from 'react-redux';
import { quizAction, resultsAction, operationAction, getResultAction, rightAnswerAction, nullAnswerAction, 
  wrongAnswerAction, nextOperationAction } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  arr: state.main.arr,
  header: state.main.header,
  operation: state.main.operation,
  result: state.main.result,
  isRight: state.main.isRight,
  isWrong: state.main.isWrong,
  readOnly: state.main.readOnly,
  button: state.main.button,
  comment: state.main.comment,
});

const mapDispatchToProps = ({
  quizAction,
  resultsAction,
  operationAction,
  getResultAction,
  rightAnswerAction,
  nullAnswerAction,
  wrongAnswerAction,
  nextOperationAction,
});

const Operation = ({ getResultAction, rightAnswerAction, nullAnswerAction, wrongAnswerAction, nextOperationAction, 
  arr, result, isRight, isWrong, operation, readOnly, button, comment }) => {
  const formula = () => `${arr[0]} ${arr[3]} ${arr[1]} =`;

  useEffect(() => {
    console.log(arr);
  })

  const checkClick = (e) => {
      const userResult = document.getElementById('result').value;
      if (Number(userResult) === arr[2]) {
        rightAnswerAction();
      } else {
        if (userResult === '') {
          nullAnswerAction();
        } else {
          wrongAnswerAction();
        }
      }
  }

  const enterClick = (e) => {
    e.preventDefault();
    console.log('Enter pressed');
}

  const nextClick = (e) => {
    if (document.getElementById('addition')) {
      nextOperationAction(add());

  }
  if (document.getElementById('substraction')) {
    // arr = sub();
    nextOperationAction(sub());
  }
  if (document.getElementById('multiplication')) {
    // arr = mul();
    nextOperationAction(mul());
  }
  if (document.getElementById('division')) {
    // arr = div();
    nextOperationAction(div());
  }

  }

  const setResult = (event) => {
  const currentResult = (event.target.validity.valid) ? event.target.value : result;
  getResultAction(currentResult);
  }

    return (
        <div id='operation-container' className={`operations ${isRight ? "rightAnswer" : ""} 
        ${isWrong ? "wrongAnswer" : ""}`}>
        <div id={operation} className="operation">
        <div>{formula()}</div>
        <form onSubmit={enterClick}>
        <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
        onChange={setResult} value={result} readOnly = {readOnly ? true : false}/>
        {!readOnly ? <button type='submit' id={readOnly === 'check' ? "check-result" : "next"} 
        onClick={button === 'check' ? checkClick : nextClick}>{button}</button> : <></>}
        </form>
        </div>
        <div id="comment">{comment}</div>
        {isWrong &&<Answer />}
        </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Operation);