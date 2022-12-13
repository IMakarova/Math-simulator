import React, { PureComponent } from 'react';
import home from '../../../../assets/png/blackHome.png';
import './style.css';

class HomePage extends PureComponent {

    render() {
        return (<img alt='home' onClick={this.state.props.homeClick} id='home' src={home}></img>)
    }
}

export default HomePage;