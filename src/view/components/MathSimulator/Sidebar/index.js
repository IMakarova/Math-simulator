import React, { PureComponent } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations';
import './style.css'

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    }
  }
//   allStorage = () => {
//     let result = [];
//     // let keys = [];
//     let values = [];
//     let keys = Object.keys(localStorage);
//     let i = keys.length;
// // console.log(keys)
//     while ( i-- ) {
//         values.unshift( localStorage.getItem(keys[i]) );
//         // keys.push(localStorage.key[i - 1])
//     }
// result.push(keys);
// result.push(values);
//     return result;
// }
  // const myLocalStorage = allStorage();
  // this.setState({ storage: allStorage() })
  // console.log(myLocalStorage, this.state);

  sidebarClick = (e) => {
    const buttonElement = e.target.closest('.sideBarButton');
        if (!buttonElement) return;
        this.props.switchIsTable(false);
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
        }
        if (buttonElement.classList.contains('substraction')) {
          arr = sub();
          this.props.changeArr(arr);
        }
        if (buttonElement.classList.contains('multiplication')) {
          arr = mul();
          this.props.changeArr(arr);
        }
        if (buttonElement.classList.contains('division')) {
          arr = div();
          this.props.changeArr(arr);
        }
        if (buttonElement.classList.contains('quiz')) {
          this.props.switchIsQuiz(true);
          this.props.changeArr(mixedOperation());
          console.log(this.props.state.arr);
        }
        if (buttonElement.classList.contains('results-table')) {
          this.props.switchIsOperation(false);
          this.props.switchIsTable(true);
          // this.props.changeStorage(this.allStorage());
          // console.log(this.props.state.storage, localStorage.length);
          // console.log(this.props.state.isTable);
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
            <li className="sideBarButton results-table">Best results</li>
        </ul>
    </div>
  )
}

}

export default Sidebar;