import React, { Component } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations'

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  sidebarClick = (e) => {
    const buttonElement = e.target.closest('.sideBarButton');
        if (!buttonElement) return;
        this.props.changeButton('check');
        this.props.switchReadOnly(false);
        this.props.switchIsQuiz(false);
        this.props.switchQuizIsStart(false);
        this.props.switchIsWrong(false);
        this.props.switchIsRight(false);
        this.props.changeComment('');
        this.props.changeResult('');
        this.props.changeHeader(buttonElement.textContent);
        this.props.switchTimerIsStart(false);
        this.props.switchTimeIsOver(false);
        const allSidebarButtons = document.querySelectorAll('.sideBarButton');
        allSidebarButtons.forEach((button) => button.classList.remove('active'));
        buttonElement.classList.add('active');
        this.props.switchIsOperation(true);
        this.props.changeOperation(buttonElement.classList[1]);
        this.props.switchIsText(false);
        const input = document.createElement('input');
        input.id = 'result';
        input.placeholder = 'result';
        let arr = [];
          if (buttonElement.classList.contains('addition')) {
            arr = add();

            this.props.changeArr(arr);
            // this.props.changeSign('+');
        }
        if (buttonElement.classList.contains('substraction')) {
          arr = sub();
          this.props.changeArr(arr);
          // this.props.changeSign('-');
          // console.log(this.props.state.arr)
        }
        if (buttonElement.classList.contains('multiplication')) {
          arr = mul();
          this.props.changeArr(arr);
          // this.props.changeSign('*');
        }
        if (buttonElement.classList.contains('division')) {
          arr = div();
          this.props.changeArr(arr);
          // this.props.changeSign('/');
        }
        if (buttonElement.classList.contains('quiz')) {
          // arr = mixedOperation();
          this.props.switchIsQuiz(true);
          this.props.changeArr(mixedOperation());
          console.log(this.props.state.arr);
        }
        console.log(arr);
    }

  render() {
    return (
    <div id="sidebar" onClick={this.sidebarClick}>
        <h3>Operations</h3>
        <ul>
            <li className="sideBarButton addition">Addition</li>
            <li className="sideBarButton substraction">Substraction</li>
            <li className="sideBarButton multiplication">Multiplication</li>
            <li className="sideBarButton division">Division</li>
            <li className="sideBarButton quiz">Quiz</li>
        </ul>
    </div>
  )
}

}

export default Sidebar;