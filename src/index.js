import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import setVoteApp from './reducers/index'
import ContainerApp from './containers/containerApp'
import { createStore , applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';








let store = createStore(setVoteApp,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
