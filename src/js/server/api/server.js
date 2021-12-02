'use strict';

const express = require('express');
const router = require('../route/router.js');
const {configServer} = require('../../config/config.json');

const app = express();
const port = process.env.PORT || configServer.PORT;

app.use(express.json());
app.use(router);

app.listen(port, (err) => {
    if(err) throw new Error(`Error listening -> ${err}`);
    console.log(`Server listening at http://localhost:${port}`);
})

