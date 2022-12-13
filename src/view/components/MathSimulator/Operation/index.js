import React, { PureComponent, useContext, useEffect } from 'react';
import { add, sub, mul, div } from '../Operations';
import SidebarContext from '../../../../context/sidebar-context';

// class Operation extends PureComponent {
//     constructor(props) {
//       super(props);
//    }
const Operation = () => {
  const context = useContext(SidebarContext);
  const formula = () => `${context.arr[0]} ${context.arr[3]} ${context.arr[1]} =`;
useEffect(() => {
  console.log(context.arr);
})
  const checkClick = (e) => {

      const userResult = document.getElementById('result').value;
      if (Number(userResult) === context.arr[2]) {
        context.rightAnswerAction();
        // context.isRight(true);
        // context.isWrong(false);
        // context.comment('That is right!');
        // context.button('next');
      } else {
        // context.isWrong(true);
        // context.isRight(false);
        if (userResult === '') {
          context.nullAnswerAction();
          // context.comment('Please, write your answer!');
        } else {
          context.wrongAnswerAction();
          // context.comment('That is wrong!');
        }
      }
  }
  const enterClick = (e) => {
    e.preventDefault();
console.log('Enter pressed');
}
  const nextClick = (e) => {
    // context.isRight(false);
    // context.comment('');
    // context.button('check');
    // context.result('');
    // let arr = [];
    if (document.getElementById('addition')) {
      // arr = add();
      context.nextOperationAction(add());

  }
  if (document.getElementById('substraction')) {
    // arr = sub();
    context.nextOperationAction(sub());
  }
  if (document.getElementById('multiplication')) {
    // arr = mul();
    context.nextOperationAction(mul());
  }
  if (document.getElementById('division')) {
    // arr = div();
    context.nextOperationAction(div());
  }

  }

  const setResult = (event) => {
  const result = (event.target.validity.valid) ? event.target.value : context.result;
  context.getResultAction(result);
  }

  // render() {
    return (
      <SidebarContext.Consumer>
      {(context) => {
        return (
        <>
        <div>{formula()}</div>
        <form onSubmit={enterClick}>
        <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
        onChange={setResult} value={context.result} readOnly = {context.readOnly ? true : false}/>
        {!context.readOnly ? <button type='submit' id={context.button === 'check' ? "check-result" : "next"} 
        onClick={context.button === 'check' ? checkClick : nextClick}>{context.button}</button> : <></>}
        </form>
        </>
                )
              }}
              </SidebarContext.Consumer>
  )
// }

}

export default Operation;