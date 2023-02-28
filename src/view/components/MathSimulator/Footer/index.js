import React, { PureComponent } from 'react';
import './style.css';

class Footer extends PureComponent {

    curDate = new Date();

    render() {
        return (
        <div id="footer">
        <div id="copyright">&copy; Irina Makarova</div>
        <div id="year">2022 - { this.curDate.getFullYear() }</div>
        </div>
        )
    }
}

export default Footer;