import React, { useState, useContext } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { showAnswerAction, nullAnswerAction, wrongAnswerAction } from '../../../../redux-state/main/actions';

const mapStateToProps = (state, ownProps) => ({
  arr: state.main.arr,
});

const mapDispatchToProps = ({
  showAnswerAction,
  nullAnswerAction,
  wrongAnswerAction
});

const Answer = ({ showAnswerAction, nullAnswerAction, wrongAnswerAction, arr }) => {
    const [id, setId] = useState('show-answer');
    const [text, setText] = useState('Show answer');
    const showAnswerClick = (e) => {
        setId('hide-answer');
        setText('Hide answer');
        showAnswerAction(<>Right answer is <span>{arr[2]}</span></>);
    }

    const hideAnswerClick = (e) => {
        setId('show-answer');
        setText('Show answer');
        if (document.getElementById('result').value === '') {
          nullAnswerAction();
          } else {
            wrongAnswerAction();
          }
    }

        return (<button id={id} className="answer" onClick={id === 'show-answer' ? showAnswerClick : hideAnswerClick}>{text}</button>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);