const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the website! This is the home page.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});