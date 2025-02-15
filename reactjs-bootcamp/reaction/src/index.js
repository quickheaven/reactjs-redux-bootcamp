import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer);

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);