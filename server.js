const express = require('express');
const path = require('path');
const cors = require("cors")
const app = express();
const port = 4000;

// serve static content from the "public" directory
app.use(express.static(path.join(__dirname, "untitled")));

app.use(cors())

// body parsing
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Homepage GET endpoint working!"})
})

app.get("/register", (req, res) => {
    console.log("Register endpoint reached")
    //res.json({message: "Register page GET endpoint working!"})
})

app.listen(port, function(error) {
    if (error) {
        console.log("Server failed listening on port" + port, error);
    } else {
        console.log("Server is listening on http://localhost:" + port);
    }
});