import React, { PureComponent, useContext, useEffect } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations';
import SidebarContext from '../../../../context/sidebar-context';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarButtons = () => {
  const context = useContext(SidebarContext);
  const location = useLocation();
  useEffect(() => {
    const operation = location.pathname.replace('/', '');
    switch(operation) {
      case 'quiz': {
        return context.quizAction(mixedOperation(), operation.toUpperCase());
      }
      case 'best-results': {
        context.resultsAction(operation);
      }
      case 'addition': {
        context.operationAction(add(), operation, operation);
      }
    }

    console.log(location);
  }, [])

  const additionHandler = (e) => {
    context.operationAction(add(), e.target.textContent.toLowerCase(), e.target.textContent);
    console.log(context);
    // this.props.changeArr(add());
  };
  const substractionHandler = (e) => {
    context.operationAction(sub(), e.target.textContent.toLowerCase(), e.target.textContent);
    console.log(context.arr);
    // this.props.changeArr(sub());
  };
  const multiplicationHandler = (e) => {
    context.operationAction(mul(), e.target.textContent.toLowerCase(), e.target.textContent);
    // this.props.changeArr(mul());
  };
  const divisionHandler = (e) => {
    context.operationAction(div(), e.target.textContent.toLowerCase(), e.target.textContent);
    // this.props.changeArr(div());
  };
  const quizHandler = (e) => {
    context.quizAction(mixedOperation(), e.target.textContent);
    console.log(context.isQuiz, context.quizIsStart, context.arr)
    // this.props.switchIsQuiz(true);
    // this.props.changeArr(mixedOperation());
  };
  const resultsHandler = (e) => {
    context.resultsAction(e.target.textContent);
    console.log(e.target.textContent);
    // this.props.switchIsOperation(false);
    // this.props.switchIsTable(true);
  };

  const sidebarButtons = [
    {
      label: 'Addition',
      handler: additionHandler,
    },
    {
      label: 'Substraction',
      handler: substractionHandler,
    },
    {
      label: 'Multiplication',
      handler: multiplicationHandler,
    },
    {
      label: 'Division',
      handler: divisionHandler,
    },
    {
      label: 'Quiz',
      handler: quizHandler,
    },
    {
      label: 'Best results',
      handler: resultsHandler,
    },
  ];

  // render() {
  return (
    <SidebarContext.Consumer>
      {(context) => {
        return sidebarButtons.map(({ label, handler }) => {
          return (
            // <li>
            <NavLink activeClassName='active' to={`/${label.toLowerCase().replace(' ', '-')}`} 
              className={`sideBarButton ${label.toLowerCase().replace(' ', '-')}`} onClick={handler} key={label}>
              {label}
            </NavLink>
            // </li>
          );
        });
      }}
    </SidebarContext.Consumer>
  );
};

// }

export default SidebarButtons;
