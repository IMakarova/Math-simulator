import React, { PureComponent } from 'react';
// import { add, sub, mul, div, mixedOperation } from '../Operations';
import './style.css';
import SidebarButtons from '../SidebarButtons';
import SidebarContext from '../../../../context/sidebar-context';

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
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

    // this.props.switchIsRight(false);
    // this.props.switchIsWrong(false);
    // this.props.changeComment('');
    // this.props.changeButton('check');
    // this.props.changeResult('');
    // this.props.switchReadOnly(false);
    // this.props.switchIsQuiz(false);
    // this.props.switchQuizIsStart(false);
    // this.props.switchIsTable(false);
    // this.props.switchTimerIsStart(false);
    // this.props.switchTimeIsOver(false);

    console.log(this.props.changeHeader);

    // this.props.changeHeader(buttonElement.textContent);
    // this.props.switchIsText(false);
    // this.props.switchIsOperation(true);

    // this.props.changeOperation(buttonElement.classList[1]);

    const allSidebarButtons = document.querySelectorAll('.sideBarButton');
    allSidebarButtons.forEach((button) => button.classList.remove('active'));
    buttonElement.classList.add('active');

    const input = document.createElement('input');
    input.id = 'result';
    input.placeholder = 'result';

    // let arr = [];
    //   if (buttonElement.classList.contains('addition')) {
    //     arr = add();

    //     this.props.changeArr(arr);
    // }
    // if (buttonElement.classList.contains('substraction')) {
    //   arr = sub();
    //   this.props.changeArr(arr);
    // }
    // if (buttonElement.classList.contains('multiplication')) {
    //   arr = mul();
    //   this.props.changeArr(arr);
    // }
    // if (buttonElement.classList.contains('division')) {
    //   arr = div();
    //   this.props.changeArr(arr);
    // }
    // if (buttonElement.classList.contains('quiz')) {
    //   this.props.switchIsQuiz(true);
    //   this.props.changeArr(mixedOperation());
    //   console.log(this.props.state.arr);
    // }
    // if (buttonElement.classList.contains('results-table')) {
    //   this.props.switchIsOperation(false);
    //   this.props.switchIsTable(true);
    //   // this.props.changeStorage(this.allStorage());
    //   // console.log(this.props.state.storage, localStorage.length);
    //   // console.log(this.props.state.isTable);
    // }
    // console.log(arr);
  };
  // sidebarButtons =

  render() {
    return (
      <SidebarContext.Consumer>
        {(context) => {
          return (
            <div id="sidebar">
              <h3>Operations</h3>
                <SidebarButtons />
            </div>
          );
        }}
      </SidebarContext.Consumer>
    );
  }
}

export default Sidebar;
