import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
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