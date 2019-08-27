import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App/App';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const history = createHistory();
export const store = configureStore(history);

store.initialDispatch();

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
}