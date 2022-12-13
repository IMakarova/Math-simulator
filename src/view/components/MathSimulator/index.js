import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { SidebarContextProvider } from '../../../context/sidebar-context';
import { AuthContextProvider } from '../../../context/auth-context';

class MathSimulator extends PureComponent {

  render() {
    return (
    <div id="container">
      <AuthContextProvider>
      <SidebarContextProvider>
      <Header />
      <Sidebar />
      <Main />
      </SidebarContextProvider>
      </AuthContextProvider>
      <Footer />

    </div>
    )
  }

}

export default MathSimulator;