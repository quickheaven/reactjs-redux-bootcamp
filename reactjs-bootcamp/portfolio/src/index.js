import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import EvensOrOdds from './projects/even-or-odds';
import Reaction from './projects/reaction';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter history={createBrowserHistory()}>
        <Routes>
            <Route path='/' element={<Header><App /></Header>} />
            <Route path='/jokes' element={<Header><Jokes /></Header>} />
            <Route path='/music-master' element={<Header><MusicMaster /></Header>} />            
            <Route path='/even-or-odds' element={<Header><EvensOrOdds /></Header>} />            
            <Route path='/reaction' element={<Header><Reaction /></Header>} />
        </Routes>
    </BrowserRouter>
);
