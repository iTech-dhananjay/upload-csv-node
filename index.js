const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/alobha-test');

const userRoute = require('./routes/user');

app.use('/', userRoute);

app.listen(3000, function () {
     console.log(`listening on 3000`);
});
