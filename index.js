require('dotenv').config();

const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

const node_session_secret = process.env.NODE_SESSION_SECRET;

app.use(session({
    secret: node_session_secret,
    saveUninitialized: true,
    resave: false
}));

// Routes
app.get('/', (req, res) => {

    if (req.session.pageHits) {
        req.session.pageHits++;
    } else {
        req.session.pageHits = 1;
    }

    var html = `
    <h1>Welcome to the website!</h1>
    <p>You have visited ${req.session.pageHits} times.</p>
    <button><a href="/signup">Signup</a></button>
    <button><a href="/login">Login</a></button>
    `;
    res.send(html);
});

app.get('/signup', (req, res) => {

    if (req.session.pageHits) {
        req.session.pageHits++;
    } else {
        req.session.pageHits = 1;
    }

    res.send(`Welcome to the signup! ${req.session.pageHits} page hits`);
});

app.get('/login', (req, res) => {

    if (req.session.pageHits) {
        req.session.pageHits++;
    } else {
        req.session.pageHits = 1;
    }

    res.send(`Welcome to the login! ${req.session.pageHits} page hits`);
});

app.get('/*dummy', (req, res) => {
    res.status(404)
    res.send('Page not found - 404');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});