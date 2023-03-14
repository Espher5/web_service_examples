const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
const router = require('./router');
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(router);

app.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log('Server listening on port', port);
});
