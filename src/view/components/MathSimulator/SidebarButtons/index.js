import React, { useEffect } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { quizAction, resultsAction, operationAction } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  // operationNumbers: state.main.operationNumbers,
  // operation: state.main.operation,
});

const mapDispatchToProps = ({
  quizAction,
  resultsAction,
  operationAction,
});


const SidebarButtons = ({ operationAction, quizAction, resultsAction }) => {
  const location = useLocation();
  useEffect(() => {
    const operation = location.pathname.replace('/', '');
    switch(operation) {
      case 'quiz': {
        const operationArr = mixedOperation();
        console.log(operationArr)
        return quizAction(operationArr, operationArr[3]);
      }
      case 'best-results': {
        return resultsAction();
      }
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
    quizAction(operationArr, operationArr[3]);
  };
  const resultsHandler = (e) => {
    resultsAction();
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

  return sidebarButtons.map(({ label, handler }) => {
          return (
            <NavLink activeClassName='active' to={`/${label.toLowerCase().replace(' ', '-')}`} 
              className={`sideBarButton ${label.toLowerCase().replace(' ', '-')}`} onClick={handler} key={label}>
              {label}
            </NavLink>
          );
        });
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarButtons);
