const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');



//import Routes
const routes = require('./routes/routes');

dotenv.config();

//connect to DB
mongoose.connect(process.env.CONNECT_TO_DB,
()=> console.log('Connected to db!'));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api',routes);
app.listen(process.env.PORT || 3000, function () {
    console.log('Server up and running ;)');
});