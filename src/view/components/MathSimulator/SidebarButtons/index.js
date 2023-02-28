import React, { useEffect } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { operationAction } from '../../../../redux-state/operations/actions';
import { quizAction } from '../../../../redux-state/quiz/actions';
import { cleanOutAction } from '../../../../redux-state/answer/actions';
// const mapStateToProps = (state, ownProps) => ({
// });

const mapDispatchToProps = ({
  quizAction,
  // resultsAction,
  operationAction,
  cleanOutAction
});


const SidebarButtons = ({ operationAction, quizAction, cleanOutAction }) => {
  // cleanOutAction();
  const location = useLocation();
  useEffect(() => {
    // cleanOutAction();
    const operation = location.pathname.replace('/', '');
    switch(operation) {
      case 'quiz': {
        const operationArr = mixedOperation();
        return quizAction(operationArr);
      }
      // case 'best-results': {
      //   return resultsAction();
      // }
      case 'addition': {
        return operationAction(add(), '+');
      }
      case 'substraction': {
        return operationAction(sub(), '-');
      }
      case 'multiplication': {
        return operationAction(mul(), '*');
      }
      case 'division': {
        return operationAction(div(), '/');
      }
    }
  }, [])

  const additionHandler = (e) => {
    operationAction(add(), '+');
  };
  const substractionHandler = (e) => {
    operationAction(sub(), '-');
  };
  const multiplicationHandler = (e) => {
    operationAction(mul(), '*');
  };
  const divisionHandler = (e) => {
    operationAction(div(), '/');
  };
  const quizHandler = (e) => {
    const operationArr = mixedOperation();
    quizAction(operationArr);

  };
  // const resultsHandler = (e) => {

  // };

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
      // handler: null,
    },
  ];

  return sidebarButtons.map(({ label, handler }) => {
          return (
            <NavLink activeClassName='active' to={`/${label.toLowerCase().replace(' ', '-')}`} 
              className={`sideBarButton ${label.toLowerCase().replace(' ', '-')}`} onClick={handler} key={label}>
              {label}
            </NavLink>
          );
        });
};

export default connect(null, mapDispatchToProps)(SidebarButtons);
