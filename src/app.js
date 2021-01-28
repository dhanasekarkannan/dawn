const express = require('express');
const path = require('path');
const router = require('./router/router');
const log = require( path.join(__dirname,'../utils/log/log'));
const serverConfig = require(path.join(__dirname, '../config/server.json'));
const app = express();
const port = serverConfig.dev.port || process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('Server Started Listening to port : ' + port);
    log.server('Server Started Listening to port : ' + port);
});
