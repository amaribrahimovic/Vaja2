const express = require('express');
require('dotenv').config();

// Global variables
const port = process.env.PORT

// Server setup
const app = express();

app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
});

// Routes
app.get('/', (req, res)=>{
    res.send('Hello')
});

