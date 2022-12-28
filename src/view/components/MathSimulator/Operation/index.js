import React, { useEffect } from 'react';
import { add, sub, mul, div } from '../Operations';
import { useLocation } from 'react-router-dom';

// import SidebarContext from '../../../../context/sidebar-context';
import Answer from '../Answer';
import { connect } from 'react-redux';
import { getResultAction, rightAnswerAction, nullAnswerAction, 
  wrongAnswerAction, nextOperationAction } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  numbers: state.main.numbers,
  operationMark: state?.main?.operationMark,
  // operation: state.main.operation,
  result: state.main.result,
  isRight: state.main.isRight,
  isWrong: state.main.isWrong,
  readOnly: state.main.readOnly,
  button: state.main.button,
  comment: state.main.comment,
});

const mapDispatchToProps = ({
  getResultAction,
  rightAnswerAction,
  nullAnswerAction,
  wrongAnswerAction,
  nextOperationAction,
});

const Operation = ({ getResultAction, rightAnswerAction, nullAnswerAction, wrongAnswerAction, nextOperationAction, 
  numbers, operationMark, result, isRight, isWrong, readOnly, button, comment }) => {
    console.log(numbers[0])
  // const formula = () => `${numbers[0]} ${operationMark} ${numbers[1]} =`;
  const location = useLocation();
// const operation = location.replace('/', '');

  useEffect(() => {
    console.log(numbers);
  })

  const checkClick = (e) => {
      const userResult = document.getElementById('result').value;
      if (Number(userResult) === numbers[2]) {
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

    if (location.pathname === '/addition') {
      nextOperationAction(add());
  }
  if (location.pathname === '/substraction') {
    nextOperationAction(sub());
  }
  if (location.pathname === '/multiplication') {
    nextOperationAction(mul());
  }
  if (location.pathname === '/division') {
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
        <div id={location.pathname.replace('/', '')} className="operation">
        {/* <div>{formula()}</div> */}
        <form onSubmit={enterClick}>
        <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
        onChange={setResult} value={result} readOnly = {readOnly ? true : false}/>
        {!readOnly ? <button type='submit' id={readOnly === 'check' ? "check-result" : "next"} 
        onClick={button === 'check' ? checkClick : nextClick}>{button}</button> : <></>}
        </form>
        </div>
        <div id="comment">{typeof comment === 'number' ? <>Right answer is <span>{comment}</span></> : comment}</div>
        {isWrong &&<Answer />}
        </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Operation);