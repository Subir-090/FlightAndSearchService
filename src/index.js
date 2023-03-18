const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const routes = require('./routes/index');

function setUpAndStartServer() {
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api',routes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setUpAndStartServer();
