import React, { PureComponent } from 'react';
import './style.css'

class Title extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }
  
  render() {
    return (
        <>{this.props.state.isText ? <h1>Math simulator. Operations within 1000</h1> : 
        <h1 className='link' onClick={this.state.props.homeClick}>Math simulator. Operations within 1000</h1>}</>
    );
  }
}

export default Title;
