const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import cors middleware

const app = express();
const port = 3000; // Define your preferred port number
    
// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle content submission
app.post('/api/postContent', (req, res) => {
    const { content } = req.body;

    // File path where content will be stored
    const filePath = path.join(__dirname, 'users.txt');

    // Append content to the file
    fs.appendFile(filePath, `${content}\n`, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Error saving content');
        } else {
            console.log('Content saved successfully');
            res.send('Content saved successfully');
        }
    });
});

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
