const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

const node_session_secret = '425bfa8d-400a-4394-bdd0-88caa2686f47';

app.use(session({
    secret: node_session_secret,
    saveUninitialized: true,
    resave: false
}));

// Routes
app.get('/', (req, res) => {

    if (req.session.pageHits) {
        pageHits = req.session.pageHits++;
    } else {
        pageHits = req.session.pageHits = 1;
    }

    res.send(`Welcome to the website! ${req.session.pageHits} page hits`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});