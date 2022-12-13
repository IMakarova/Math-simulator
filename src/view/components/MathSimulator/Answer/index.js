import React, { PureComponent, useState, useContext } from 'react';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';

// class Answer extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//         id: 'show-answer',
//         text: 'Show answer'
//     }
// }
const Answer = () => {
    const context = useContext(SidebarContext);
    const [id, setId] = useState('show-answer');
    const [text, setText] = useState('Show answer');
    const showAnswerClick = (e) => {
        setId('hide-answer');
        setText('Hide answer');
    //     this.setState({id: 'hide-answer',
    // text: 'Hide answer'});
    context.showAnswerAction(<>Right answer is <span>{context.arr[2]}</span></>);
    // context.readOnly(true);
    }

    const hideAnswerClick = (e) => {
        setId('show-answer');
        setText('Show answer');
        // this.setState({id: 'show-answer',
        // text: 'Show answer'});    
        // context.readOnly(false);
        if (document.getElementById('result').value === '') {
            context.nullAnswerAction();
          } else {
            context.wrongAnswerAction();
          }
    }

    // render() {
        return (<button id={id} className="answer" onClick={id === 'show-answer' ? showAnswerClick : hideAnswerClick}>{text}</button>)
// }

}

export default Answer;