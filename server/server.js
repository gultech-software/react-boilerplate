const app = require('express')();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(bodyParser.json());

routes(app);

app.listen(1337);
