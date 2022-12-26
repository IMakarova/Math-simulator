import React, { useEffect } from 'react';
import { add, sub, mul, div, mixedOperation } from '../Operations';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { quizAction, resultsAction, operationAction } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  arr: state.main.arr,
  header: state.main.header,
  operation: state.main.operation,
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
        return quizAction(mixedOperation(), operation);
      }
      case 'best-results': {
        return resultsAction(operation.replace('-', ' '));
      }
      case 'addition': {
        return operationAction(add(), operation, operation);
      }
      case 'substraction': {
        return operationAction(sub(), operation, operation);
      }
      case 'multiplication': {
        return operationAction(mul(), operation, operation);
      }
      case 'division': {
        return operationAction(div(), operation, operation);
      }
    }
  }, [])

  const additionHandler = (e) => {
    operationAction(add(), e.target.textContent.toLowerCase(), e.target.textContent);
    console.log('add');
  };
  const substractionHandler = (e) => {
    operationAction(sub(), e.target.textContent.toLowerCase(), e.target.textContent);
  };
  const multiplicationHandler = (e) => {
    operationAction(mul(), e.target.textContent.toLowerCase(), e.target.textContent);
  };
  const divisionHandler = (e) => {
    operationAction(div(), e.target.textContent.toLowerCase(), e.target.textContent);
  };
  const quizHandler = (e) => {
    quizAction(mixedOperation(), e.target.textContent);
  };
  const resultsHandler = (e) => {
    resultsAction(e.target.textContent);
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
