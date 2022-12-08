import React, { PureComponent } from 'react';
import './style.css';

class Answer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        id: 'show-answer',
        text: 'Show answer'
    }
}
    showAnswerClick = (e) => {
        this.setState({id: 'hide-answer',
    text: 'Hide answer'});
    this.props.changeComment(<>Right answer is <span>{this.props.state.arr[2]}</span></>);
    this.props.switchReadOnly(true);
    }

    hideAnswerClick = (e) => {
        this.setState({id: 'show-answer',
        text: 'Show answer'});    
        this.props.switchReadOnly(false);
        if (document.getElementById('result').value === '') {
            this.props.changeComment('Please, write your answer!');
          } else {
          this.props.changeComment('That is wrong!');
          }
    }

    render() {
        return (<button id={this.state.id} className="answer" onClick={this.state.id === 'show-answer' ? this.showAnswerClick : this.hideAnswerClick}>{this.state.text}</button>)
}

}

export default Answer;