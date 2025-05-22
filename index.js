
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files from the public directory
app.use('/public', express.static('public'));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});
