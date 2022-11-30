import React, { Component } from 'react';
import home from '../../../../assets/png/blackHome.png'

class HomePage extends Component {
  constructor(props) {
    super(props);

}
    homeClick = (e) => {
    this.props.switchIsText(true);
    this.props.switchIsOperation(false);
    this.props.changeHeader('How to start?');
    this.props.switchIsQuiz(false);
    this.props.switchIsRight(false);
    this.props.switchIsWrong(false);
    document.querySelector('.active').classList.remove('active');
    }

    render() {
        return (<>{!this.props.state.isText && <img onClick={this.homeClick} id='home' src={home}></img>}</>)
}

}

export default HomePage;