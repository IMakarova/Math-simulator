import React, { PureComponent } from 'react';
import './style.css';

class Footer extends PureComponent {

    render() {
        return (
        <div id="footer">
        <div id="copyright">&copy; Irina Makarova</div>
        <div id="year">2022</div>
        </div>
        )
    }
}

export default Footer;