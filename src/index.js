import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { multiClientMiddleware } from 'redux-axios-middleware';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { axiosApi, axiosOptions } from './actions/api';
import routes from './routes';
import rootReducer from './reducers';

const history = createBrowserHistory();
const appRouterMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
    multiClientMiddleware(axiosApi, axiosOptions),
    appRouterMiddleware
)(createStore);
const store = createStoreWithMiddleware(
    rootReducer(history),
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ConnectedRouter history={history} children={routes} />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('wrapper')
);
