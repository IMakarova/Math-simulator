import React, { PureComponent } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations';

class SidebarButtons extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        props,
      }
    }

additionHandler = () => {
    this.props.changeArr(add());
}
substractionHandler = () => {
    this.props.changeArr(sub());
}
multiplicationHandler = () => {
    this.props.changeArr(mul());
}
divisionHandler = () => {
    this.props.changeArr(div());
}
quizHandler = () => {
    this.props.switchIsQuiz(true);
    this.props.changeArr(mixedOperation());
}
resultsHandler = () => {
    this.props.switchIsOperation(false);
    this.props.switchIsTable(true);
}

sidebarButtons = [
    {
      label: 'Addition',
      handler: this.additionHandler()
    },
    {
        label: 'Substraction',
        handler: this.substractionHandler()
      }, 
      {
        label: 'Multiplication',
        handler: this.multiplicationHandler()
      },   
      {
        label: 'Division',
        handler: this.divisionHandler()
      },    
      {
        label: 'Quiz',
        handler: this.quizHandler()
      },    
      {
        label: 'Best results',
        handler: this.resultsHandler()
      }
  ]

      render() {
          return (
            this.sidebarButtons
          )
      }
  }
  
  export default SidebarButtons;

