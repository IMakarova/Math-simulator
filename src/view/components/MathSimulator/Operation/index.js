import React, { Component } from 'react';
import { add, sub, mul, div } from '../Operations';

class Operation extends Component {
    constructor(props) {
      super(props);
   }
  
  formula = () => `${this.props.state.arr[0]} ${this.props.state.arr[3]} ${this.props.state.arr[1]} =`;

  checkClick = (e) => {

      const userResult = document.getElementById('result').value;
      if (Number(userResult) === this.props.state.arr[2]) {
        this.props.switchIsRight(true);
        this.props.switchIsWrong(false);
        this.props.changeComment('That is right!');
        this.props.changeButton('next');
      } else {
        this.props.switchIsWrong(true);
        this.props.switchIsRight(false);
        if (userResult === '') {
          this.props.changeComment('Please, write your answer!');
        } else {
        this.props.changeComment('That is wrong!');
        }
      }
  }
  enterClick = (e) => {
    e.preventDefault();
console.log('Enter pressed');
}
  nextClick = (e) => {
    this.props.switchIsRight(false);
    this.props.changeComment('');
    this.props.changeButton('check');
    this.props.changeResult('');
    let arr = [];
    if (document.getElementById('addition')) {
      arr = add();
      this.props.changeArr(arr);
  }
  if (document.getElementById('substraction')) {
    arr = sub();
    this.props.changeArr(arr);
  }
  if (document.getElementById('multiplication')) {
    arr = mul();
    this.props.changeArr(arr);
  }
  if (document.getElementById('division')) {
    arr = div();
    this.props.changeArr(arr);
  }

  }

  setResult = (event) => {
  const result = (event.target.validity.valid) ? event.target.value : this.props.state.result;
    this.props.changeResult(result);
  }

  render() {
    return (
        <>
        <div>{this.formula()}</div>
        <form onSubmit={this.enterClick}>
        <input type="text" pattern="[0-9]*" id = 'result' placeholder='result' 
        onChange={this.setResult} value={this.props.state.result} readOnly = {this.props.state.readOnly ? true : false}/>
        {!this.props.state.readOnly ? <button type='submit' id={this.props.state.button === 'check' ? "check-result" : "next"} 
        onClick={this.props.state.button === 'check' ? this.checkClick : this.nextClick}>{this.props.state.button}</button> : <></>}
        </form>
        </>
  )
}

}

export default Operation;