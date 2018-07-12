const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const isAuthenticated = require('./middleware/authentication')
const cors = require('cors');

const dbName = 'socmedDb'
const url = `mongodb://localhost:27017/${dbName}`;
const port = process.env.PORT || 3000;

mongoose.connect(url);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/twott', isAuthenticated, routes);
app.use('/user/login',userRoutes);

app.listen(3000, ()=>{
    console.log('Server up on 3000')
})
