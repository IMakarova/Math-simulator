import React, { PureComponent } from 'react';
import './style.css';
import SidebarContext from '../../../../context/sidebar-context';
import { NavLink } from 'react-router-dom';

class Title extends PureComponent {
  
  render() {
    return (
      <SidebarContext.Consumer>
      {(context) => {
        return (
        <>{context.isText ? <h1>Math simulator. Operations within 1000</h1> : 
        <NavLink to='/' className=''>
        <h1 onClick={this.props.homeClick} className='link'>Math simulator. Operations within 1000</h1>
        </NavLink>
        }</>
        )
      }}
      </SidebarContext.Consumer>
    ); 
  }
}

export default Title;
