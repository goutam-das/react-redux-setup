import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';
import Pages from './pages';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Pages />
            </Provider>
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}