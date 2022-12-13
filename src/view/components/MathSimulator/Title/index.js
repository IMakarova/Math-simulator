import React, { PureComponent } from 'react';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';

class Title extends PureComponent {
  
  render() {
    return (
      <SidebarContext.Consumer>
      {(context) => {
        return (
        <>{context.isText ? <h1>Math simulator. Operations within 1000</h1> : 
        <h1 className='link' onClick={this.state.props.homeClick}>Math simulator. Operations within 1000</h1>}</>
        )
      }}
      </SidebarContext.Consumer>
    ); 
  }
}

export default Title;
