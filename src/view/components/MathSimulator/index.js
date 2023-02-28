import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalManager from './ModalManager';

class MathSimulator extends PureComponent {

  render() {
    return (
    <div id="container">
      <Header />
      <ModalManager />
      <Sidebar />
      <Main />
      <Footer />
    </div>
    )
  }

}

export default MathSimulator;