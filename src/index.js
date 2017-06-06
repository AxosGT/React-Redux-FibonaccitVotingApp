import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import setVoteApp from './reducers/index'
import ContainerApp from './containers/containerApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'








let store = createStore(setVoteApp);

ReactDOM.render(
  <Provider store={store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
