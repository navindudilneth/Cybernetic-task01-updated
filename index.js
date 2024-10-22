const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors'); 

const UserRoute = require('./route/userRoute');
// const UserController = require('./controller/UserController');
// const UserController = require('./controller/UserController');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Using the routes from userRoute.js
app.use('/api', UserRoute);

//Starting server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


