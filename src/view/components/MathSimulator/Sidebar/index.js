import React, { PureComponent } from 'react';
import './style.css';
import SidebarButtons from '../SidebarButtons';

class Sidebar extends PureComponent {

  render() {
    return (
            <div id="sidebar">
              <h3>Operations</h3>
                <SidebarButtons />
            </div>
    );
  }
}

export default Sidebar;
