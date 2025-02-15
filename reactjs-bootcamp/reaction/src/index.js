import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import PubSub, { PubSubContext } from './pubsub';
import App from './components/App';
import { newMessage } from './actions/messages';
import './index.css';


const store = createStore(rootReducer);

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const { message, channel } = messageObject;

        console.log('Received message:', message, 'channel:', channel);

        store.dispatch(message);
    }
});

setTimeout(() => {
    pubsub.publish(newMessage('Hello world!'));
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <PubSubContext.Provider value={{ pubsub }}>
            <App />
        </PubSubContext.Provider>
    </Provider>
);