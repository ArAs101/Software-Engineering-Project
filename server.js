const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// serve static content from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// body parsing
app.use(express.json());


app.listen(port, function(error) {
    if (error) {
        console.log("Server failed listening on port" + port, error);
    } else {
        console.log("Server is listening on http://localhost:" + port);
    }
});