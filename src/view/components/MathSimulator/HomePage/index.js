import React, { PureComponent } from 'react';
import home from '../../../../assets/png/blackHome.png';
import './style.css';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    }

}
    render() {
        return (<img onClick={this.state.props.homeClick} id='home' src={home}></img>)
    }
}

export default HomePage;