import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './view/components/MathSimulator/style.css';
import MathSimulator from './view/components/MathSimulator';
import store from './redux-state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MathSimulator />
    </Provider>
  </BrowserRouter> 
);

