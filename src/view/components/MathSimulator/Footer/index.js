import React, { PureComponent } from 'react';
import './style.css';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    }

}
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