const express = require('express');
const stories = require('./stories')

const app = express();

app.use((req, res, next) => {
    console.log('Request details. Method:', req.method, 'Original url: ', req.originalUrl);

    next();
});

app.use((req, res, next) => {    
    res.header('Access-Control-Allow-Origin', '*');
    
    next();
});


app.get('/ping', (req, res) => {
    res.send('pong!');
});

app.get('/stories', (req, res) => {
    return res.json(stories);
});

app.get('/stories/:title', (req, res) => {
    const { title } = req.params;

    res.json(stories.filter(story => story.title.includes(title)));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on 3000 ${PORT}`));
