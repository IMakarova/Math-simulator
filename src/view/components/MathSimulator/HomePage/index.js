import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../../../assets/png/blackHome.png';
import './style.css';

class HomePage extends PureComponent {

    render() {
        return (
        <NavLink to='/welcome'>
            <img alt='home' onClick={this.props.homeClick} id='home' src={home}></img>
        </NavLink>
        )
    }
}

export default HomePage;