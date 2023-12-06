const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Set up Stactic File
app.use(express.static('public'));

// API Routes
app.use(apiRoutes)

// HTML Routes
app.use(htmlRoutes);


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });