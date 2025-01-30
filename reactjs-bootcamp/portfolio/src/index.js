import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

//const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
root.render(
    <BrowserRouter history={createBrowserHistory()}>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/jokes' element={<Jokes />} />
        </Routes>
    </BrowserRouter>
)
/*
new Promise(resolve => {
    setTimeout(() => {
        console.log('Bears');
        resolve();
    }, 2000);
})
.then(() => {
    console.log('Beets');
    console.log('Battlestar Galactica');
});
*/
/*
new Promise(resolve => {
    setTimeout(() => {
        resolve('Bears, Beets, Battlestar Galactica');
    }, 2000);
})
.then(quote => {
    console.log(quote);
});
*/
/*
new Promise((resolve, reject) => {
    return reject(new Error('No bears'));
    setTimeout(() => {
        resolve('Bears, Beets, Battlestar Galactica');
    }, 2000);
})
.then(quote => {
    console.log(quote);
})
.catch(error => console.log('error', error));
*/